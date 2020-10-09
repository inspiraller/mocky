module.exports = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@types/(.*)$': '<rootDir>/@types/$1',
    'stories/(.*)': '<rootDir>/stories/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transform: {
    // '^.+.stories.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '(\\.(test|spec))\\.[tj]sx?$',
  setupFilesAfterEnv: ['<rootDir>/jest/setupEnzyme.ts', '<rootDir>/jest/removeStyledWarn.js'],
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'reports',
        outputName: 'test-reporter.xml',
        reportedFilePath: 'absolute',
        indent: 4,
        sonar56x: false
      }
    ]
  ],
  coveragePathIgnorePatterns: [
    /* need to add this to sonar-project.properties */
    'node_modules',
    '<rootDir>/src/store/storeTypes.ts',
    '<rootDir>/src/hot.tsx',
    '<rootDir>/src/store/*'
  ],
  collectCoverageFrom: ['<rootDir>/src/*.{ts,tsx}', '<rootDir>/src/**/*.{t,j}s{,x}'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
