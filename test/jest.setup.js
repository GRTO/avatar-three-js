import '@testing-library/jest-dom';

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  roots: ['src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
