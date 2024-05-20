module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat     | 서비스 기능 추가\n" },
    { value: "🐛 fix", name: "🐛 fix      | 버그 수정\n" },
    {
      value: "💄 design",
      name: "💄 design   | CSS 코드 수정\n",
    },
    {
      value: "🚚 chore",
      name: "🚚 chore    | 패키지 관리 등 잡무\n",
    },
    {
      value: "🩹 style",
      name: "🩹 style    | 코드에 영향이 없는 간단한 수정\n",
    },
    { value: "♻️ refactor", name: "♻️ refactor  | 코드의 구조 혹은 설계 변경\n" },
    {
      value: "✅ test",
      name: "✅ test     | 테스트 케이스 관련 코드 수정\n",
    },
    {
      value: "👷 ci",
      name: "👷 ci       | 커밋부터 통합까지 CI 과정의 코드 수정\n",
    },
    { value: "📝 docs", name: "📝 docs     | 문서 수정\n" },
    {
      value: "⚡ pref",
      name: "⚡ pref     | 성능 개선 코드\n",
    },
  ],
  allowCustomScopes: false,
  scopes: [
    "component",
    "css",
    "hook",
    "store",
    "util",
    "api",
    "type",

    "wrong codes",
    "spaghetti codes",
    "alien codes",

    "asset",
    "constant",
    "package",

    "lint",
    "formatting",

    "config",
    "workflow",

    // NOTE: .releaserc.js
    "breaking",
    "no-release",
    "README",
  ],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer: "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body"],
  subjectLimit: 100,
};
