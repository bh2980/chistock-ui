import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@charts/(.*)$": "<rootDir>/src/charts/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    // 필요한 경우 다른 모듈에 대한 alias 추가
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // 추가된 transform 설정
  },
};

export default config;
