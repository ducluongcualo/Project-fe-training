# Getting Started with BnK React Base

## Start app

`yarn install`

`yarn start`

## Source structure

- "**/public**": public resources as images, icons...
- "**/src**": main source
    + "**/src/assets**": assets - icons, images
    + "**/src/components**": components
    + "**/src/constants**": constants definitions as enums, const variables, configs...
    + "**/src/environment**": environment variables
    + "**/src/locales**": i18next - translations & configs
    + "**/src/pages**": 
      + "**/src/pages/auth**": authentications - login/forgot pass/reset pass
      + "**/src/pages/error**": error pages
      + "**/src/pages/...**": pages
    + "**/src/sass**": common/global css 
    + "**/src/services**": services - auth, config, http...
      + "**/src/services/mock**": mock services - mock api, mock data,... for testing
    + "**/src/shared**": shared definitions (business variables, dto classes...) between FE vs BE
    + "**/src/utils**": common utils which can be reused many times
