# 기여 가이드

AI SaaS Starter Kit에 기여해주셔서 감사합니다! 🎉

## 시작하기

1. 저장소를 Fork합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 커밋 메시지 규칙

프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드/설정 변경

### 예시
```
feat(auth): 소셜 로그인 기능 추가

Google, GitHub OAuth 연동 구현
- Supabase Auth 설정
- 로그인 UI 컴포넌트 추가

Closes #123
```

## 코드 스타일

- TypeScript strict 모드 사용
- ESLint 규칙 준수
- Prettier로 자동 포맷팅
- 의미 있는 변수명 사용

## 테스트

변경 사항에 대한 테스트를 추가해주세요:

```bash
npm run test
```

## 빌드 확인

PR 전에 빌드가 성공하는지 확인해주세요:

```bash
npm run build
npm run lint
```

## 문의

- 기술 문의: sales@com.dooray.com
- 영업 문의: sales@com.dooray.com
- GitHub Issues: https://github.com/ez2sarang/ai-saas-starter-kit/issues

## 행동 강령

모든 기여자는 서로를 존중하고 건설적인 피드백을 제공해야 합니다.
