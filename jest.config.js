const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root,

    testEnvironment: 'jsdom',

    displayName: 'Marketfy',

    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.stories.js',
        // '!**/*.style.js',
        '!**/node_modules/**'
    ],

    setupFilesAfterEnv: ['<rootDir>/src/main/config/jest/setupTests.js'],
    setupFiles: ['<rootDir>/src/main/config/jest/setEnvVars.js'],

    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],

    coveragePathIgnorePatterns: [
        'src/pages',
        'src/store',
        '.next/',
        '.storybook/',
        'coverage/',
        'src/library/common/constants',
        '.eslintrc.js',
        'jest.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        // 'src/main/config',
        // 'src/main/factories',
        // 'src/main/infra'
    ],

    coverageReporters: ['json', 'text', 'lcov', 'clover'],

    moduleNameMapper: {
        '^infra(.*)$': '<rootDir>/src/infra/$1',
        '^library(.*)$': '<rootDir>/src/library/$1',
        '^main(.*)$': '<rootDir>/src/main/$1',
        '^store(.*)$': '<rootDir>/src/store/$1',
        // Sub-Folders
        '^components(.*)$': '<rootDir>/src/library/common/components/$1'
    },

    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
    }
};
