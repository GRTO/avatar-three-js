module.exports = {
  preset: 'ts-jest',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!**/utils/test/**',
    '!**/*.test.tsx.snap',
    '!**/*.test.(tsx|ts|js|jsx)',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      isolatedModules: true,
    },
  },
};
