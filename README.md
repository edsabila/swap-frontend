# KongSwap Frontend

This project contains the main features of the kongswap application.

Guide in changes in front-end only:

When making changes in swap-toolkit:

1. Change dependency of @kongswap/uikit to point in local
   -"@kongswap/uikit": "./../swap-toolkit/packages/swap-uikit"

2. Have the swap-toolkit cloned in your local repository
3. After making changes to swap-uikit package, always perform yarn build
   -Make sure you're in the swap-uikit directory
   -Run yarn build
   -After swap-uikit has been built, go to swap-frontend directory
   -Run yarn add "./../swap-toolkit/packages/swap-uikit" to build the swap-frontend with the updated swap-uikit package
   -Then yarn start
4. Only update the version of swap-toolkit once it is ready for yarn publish
5. Once you're ready for publishing the changes
6. Change dependency of @kongswap/uikit to point in the deployed swap-uikit package
   -"@kongswap/uikit": "{latest-version}"
7. Go to the swap-uikit directory, then run yarn publish
