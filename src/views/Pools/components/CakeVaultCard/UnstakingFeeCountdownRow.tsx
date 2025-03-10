import React from 'react'
import { Flex, Text, TooltipText, useTooltip } from '@kongswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import useWithdrawalFeeTimer from 'hooks/cakeVault/useWithdrawalFeeTimer'
import { useCakeVault } from 'state/hooks'
import WithdrawalFeeTimer from './WithdrawalFeeTimer'

const UnstakingFeeCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    userData: { lastDepositedTime, userShares },
    fees: { withdrawalFee, withdrawalFeePeriod },
  } = useCakeVault()
  const feeAsDecimal = withdrawalFee / 100 || '-'
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Text bold mb="4px">
        {t('Unstaking fee: %fee%%', { fee: feeAsDecimal })}
      </Text>
      <Text>
        {t(
          'Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.',
        )}
      </Text>
    </>,
    { placement: 'bottom-start' },
  )

  const { secondsRemaining, hasUnstakingFee } = useWithdrawalFeeTimer(
    parseInt(lastDepositedTime, 10),
    userShares,
    withdrawalFeePeriod,
  )

  // The user has made a deposit, but has no fee
  const noFeeToPay = lastDepositedTime && !hasUnstakingFee && userShares.gt(0)

  // Show the timer if a user is connected, has deposited, and has an unstaking fee
  const shouldShowTimer = account && lastDepositedTime && hasUnstakingFee

  const getRowText = () => {
    if (noFeeToPay) {
      return t('Unstaking Fee').toLowerCase()
    }
    if (shouldShowTimer) {
      return t('unstaking fee until')
    }
    return t('unstaking fee if withdrawn within 72h')
  }

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        {noFeeToPay ? '0' : feeAsDecimal}% {getRowText()}
      </TooltipText>
      {shouldShowTimer && <WithdrawalFeeTimer secondsRemaining={secondsRemaining} />}
    </Flex>
  )
}

export default UnstakingFeeCountdownRow
