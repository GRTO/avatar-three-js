module.exports = {
  preset: 'ts-jest',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|glb|gltf)$':
      '<rootDir>/fileTransformer.js',
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
