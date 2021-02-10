# testing cypress
https://github.com/kristijan-pajtasev/cypress-setup/blob/master/package.json

# testing coverage gets logged - output
https://github.com/cypress-io/code-coverage/issues/196

# typescript coverage?
- https://stackoverflow.com/questions/54937425/trying-to-make-cypress-typescript-and-istanbuljs-work-together

# to try?
 - https://www.npmjs.com/package/@istanbuljs/nyc-config-typescript
# example
- https://github.com/lluia/cypress-typescript-coverage-example
- https://github.com/Bkucera/cypress-code-coverage/tree/master/examples/vanilla-typescript-webpack

# setting variables
https://stackoverflow.com/questions/55991641/npm-test-coverage-never-exits

# typescript implementation 
- https://github.com/cypress-io/code-coverage/issues/78
```
"nyc": {
    "extends": "@istanbuljs/nyc-config-typescript",
    "extension": [
      ".tsx"
    ],
    "include": [
      "src/**/*.tsx"
    ],
    "exclude": [
      "cypress/",
      "assets/",
      "test/"
    ],
    "all": true
  }
  ```

  # Looking at code
  - https://www.npmjs.com/package/@cypress/code-coverage?activeTab=readme

  # Different output dir - and merging of coverage reports
  - https://rafaelalmeidatk.com/blog/merging-coverage-reports-from-jest-and-cypress

 # Troubleshoot - Cannot find coverag .nyc_output\out.json

- https://www.gitmemory.com/issue/istanbuljs/nyc/1172/530112217
 npx envinfo@latest --preset nyc

 # Example
 https://dev.to/enitschorn/how-to-set-up-cypress-code-coverage-with-typescript-and-ts-loader-2ema