module.exports = {
  displayName: 'Client',
  rootDir: './',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx,mjs}',
    '!src/index.tsx',
    '!src/setupTests.ts'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  reporters: ['default', 'jest-junit'],
  testResultsProcessor: 'jest-junit',
  setupFiles: ['./client/src/setupTests.ts'],
  snapshotSerialziers: ['enzyme-to-json'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\build\\\\'],
  testURL: 'http://localhost',
  transfomIgnorePatterns: ['./src/node_modules/', './src/build/'],
  verbose: false
}
