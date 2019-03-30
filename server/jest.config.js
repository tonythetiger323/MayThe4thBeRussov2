module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  reporters: ['default', 'jest-junit'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node'
}
