import { MenuEntry } from '@kongswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.pancakeswap.finance/#/pool',
      }
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Profile'),
  //   icon: 'GroupsIcon',
  //   href:'/profile'
  //   // items: [
  //   //   {
  //   //     label: t('Task Center'),
  //   //     href: '/profile/tasks',
  //   //   },
  //   //   {
  //   //     label: t('Your Profile'),
  //   //     href: '/profile',
  //   //   },
  //   // ],
  // },
  {
    label: t('Roadmap'),
    icon: 'InfoIcon',
    href:'/roadmap'
    // items: [
    //   {
    //     label: t('Overview'),
    //     href: 'https://pancakeswap.info',
    //   },
    //   {
    //     label: t('Tokens'),
    //     href: 'https://pancakeswap.info/tokens',
    //   },
    //   {
    //     label: t('Pairs'),
    //     href: 'https://pancakeswap.info/pairs',
    //   },
    //   {
    //     label: t('Accounts'),
    //     href: 'https://pancakeswap.info/accounts',
    //   },
    // ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
