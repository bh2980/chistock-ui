module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat     | 서비스 기능 추가" },
    { value: "🐛 fix", name: "🐛 fix      | 버그 수정" },
    {
      value: "🚚 chore",
      name: "🚚 chore    | 패키지 관리 등 잡무",
    },
    {
      value: "💄 style",
      name: "💄 style    | 코드에 영향이 없는 수정",
    },
    { value: "♻️ refactor", name: "♻️ refactor  | 코드의 구조 혹은 설계 변경" },
    {
      value: "✅ test",
      name: "✅ test     | 테스트 케이스 관련 코드 수정",
    },
    {
      value: "👷 ci",
      name: "👷 ci       | 커밋부터 통합까지 CI 과정의 코드 수정",
    },
    { value: "📝 docs", name: "📝 docs     | 문서 수정" },
    {
      value: "⚡ pref",
      name: "⚡ pref     | 성능 개선 코드",
    },
  ],
  allowCustomScopes: false,
  scopes: [
    {
      value: "component",
      name: "component       : 컴포넌트 관련",
    },
    {
      value: "css",
      name: "css             : css 관련",
    },
    {
      value: "hook",
      name: "hook            : hook 관련",
    },
    {
      value: "store",
      name: "store           : store 관련",
    },
    {
      value: "util",
      name: "util            : util 관련",
    },
    {
      value: "api",
      name: "api             : api 관련",
    },
    {
      value: "type",
      name: "type            : type 관련",
    },
    {
      value: "story",
      name: "story           : storybook 관련",
    },
    {
      value: "asset",
      name: "asset           : 에셋 관련",
    },
    {
      value: "constant",
      name: "constant        : 상수 관련",
    },
    {
      value: "package",
      name: "package         : 패키지 관련",
    },
    {
      value: "formatting",
      name: "formatting      : 포맷팅 관련",
    },
    {
      value: "wrong codes",
      name: "wrong codes     : 잘못된 코드 관련",
    },
    {
      value: "spaghetti codes",
      name: "spaghetti codes : 스파게티 코드 관련",
    },
    {
      value: "alien codes",
      name: "alien codes     : 이상한 코드 관련",
    },
    {
      value: "config",
      name: "config          : 설정 관련",
    },
    {
      value: "README",
      name: "README          : README 관련",
    },
    {
      value: "workflow",
      name: "workflow        : 작업 흐름 관련",
    },
  ],
  messages: {
    type: "변경할 내용의 유형을 선택하세요:",
    scope: "\n이 변경의 범위(SCOPE)를 명시하세요 (선택 사항):",
    // allowCustomScopes가 true인 경우 사용
    customScope: "이 변경의 범위(SCOPE)를 명시하세요:",
    subject: "변경 내용에 대해 짧고 명령형으로 작성하세요:\n",
    body: '변경 내용에 대한 더 긴 설명을 작성하세요 (선택 사항). "|"를 사용하여 줄 바꿈하세요:\n',
    breaking: "어떤 중대한 변경사항(BREAKING CHANGES)이 있는지 나열하세요 (선택 사항):\n",
    footer: "이 변경사항으로 해결된 이슈가 있다면 나열하세요 (선택 사항). 예: #31, #34:\n",
    confirmCommit: "위의 커밋을 진행하시겠습니까?",
  },
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body"],
  subjectLimit: 100,
};
