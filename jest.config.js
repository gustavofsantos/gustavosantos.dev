module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
