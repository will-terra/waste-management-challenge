module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '.*\\.stories\\.(ts|tsx|js|jsx)$'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.ts(x)?',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/assets/(.*)$': '<rootDir>/assets/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    "^.+\\.(svg|png)$": "<rootDir>/__tests__/svgTransform.ts"

  }
};
