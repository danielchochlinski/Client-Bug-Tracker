module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/test/(.*)$": "<rootDir>/src/test/$1",
  },
};
