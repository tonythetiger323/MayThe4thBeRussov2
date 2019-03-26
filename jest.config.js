module.exports = {
  rootDir: './',
  projects: [
    {
      rootDir: './',
      displayName: 'client',
      clearMocks: true,
      collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx,mjs}'],
      coverageDirectory: 'coverage',
      moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
      reporters: ['default', 'jest-junit'],
      setupFiles: ['./client/src/setupTests.ts'],
      snapshotSerializers: ['enzyme-to-json'],
      testEnvironment: 'jsdom',
      testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)'
      ],
      testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\build\\\\'],
      testURL: 'http://localhost',
      transformIgnorePatterns: ['./src/node_modules/', './src/build/'],
      verbose: false
    },
    {
      displayName: 'server',
      moduleFileExtensions: ['js', 'json', 'ts'],
      rootDir: './',
      testRegex: '.spec.ts$',
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
      },
      coverageDirectory: '../coverage',
      testEnvironment: 'node'
    }
  ]
}
