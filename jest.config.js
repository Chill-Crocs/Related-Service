module.exports = {
    // setupFilesAfterEnv: [
    //   ['jest-enzyme'],
    // ],
    // testEnvironment: [
    //   ['enzyme'],
    //   ['jsdom'],
    //   ['node'],
    // ],
    testEnvironment: 'node',
    testEnvironmentOptions: {
      enzymeAdapter: 'react16',
    },
    // preset: [
    //   ['jest-puppeteer'],
    //   ['@shelf/jest-mongodb'],
    // ],
    preset: '@shelf/jest-mongodb'
  };