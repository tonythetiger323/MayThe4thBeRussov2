module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  setupFiles: ['<rootDir>/src/enzyme.config.ts'],
  snapshotSerialers: 'enzyme-to-json/serializer',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\build\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '<rootDir>/src/node_modules/',
    '<rootDir>/src/build/'
  ],
  verbose: false
}
