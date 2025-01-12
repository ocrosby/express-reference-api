module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
};