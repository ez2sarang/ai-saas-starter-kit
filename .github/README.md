# AI SaaS Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

AI 기반 문서 검색 및 챗봇 SaaS 플랫폼 템플릿

> 프로덕션 레벨의 AI SaaS 애플리케이션을 빠르게 구축하세요. Next.js 16, React 19, Supabase, 다중 LLM 지원.

## ✨ 주요 기능

- 🔐 **인증 시스템** - Supabase Auth (이메일/소셜 로그인)
- 📄 **문서 관리** - 업로드, 수정, 삭제, 벡터 임베딩
- 🤖 **AI 채팅** - 다중 LLM 지원 (OpenAI, Google Gemini, Claude, Ollama, LM Studio)
- 🔍 **벡터 검색** - pgvector 기반 RAG 시스템
- 💳 **구독 관리** - Stripe 연동 (Free/Pro/Enterprise)
- 📊 **대시보드** - 실시간 사용 통계 및 분석
- 🎨 **모던 UI** - shadcn/ui + Tailwind CSS
- ⚡ **고성능** - Next.js 16 + Turbopack

## 🚀 빠른 시작

```bash
# 1. 저장소 클론
git clone https://github.com/ez2sarang/ai-saas-starter-kit.git
cd ai-saas-starter-kit

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 편집하여 필요한 값을 입력하세요

# 4. 데이터베이스 설정
npm run db:push

# 5. 개발 서버 실행
npm run dev
```

http://localhost:3000 에서 확인하세요!

## 🛠 기술 스택

| 카테고리 | 기술 |
|---------|------|
| **프레임워크** | Next.js 16 (App Router + Turbopack) |
| **UI 라이브러리** | React 19 |
| **언어** | TypeScript 5.3 |
| **데이터베이스** | Supabase (PostgreSQL + pgvector) |
| **ORM** | Drizzle ORM |
| **인증** | Supabase Auth |
| **AI/LLM** | OpenAI, Google Gemini, Claude, Ollama, LM Studio |
| **결제** | Stripe |
| **UI 컴포넌트** | shadcn/ui + Tailwind CSS |
| **상태 관리** | TanStack Query |
| **배포** | Vercel |

## 💡 프로젝트 배경

이 프로젝트는 **"2개월 프로젝트를 3.5일에 완성할 수 있을까?"**라는 실험에서 시작되었습니다.

### 실험 결과
- ✅ **개발 기간**: 2개월 → 3.5일
- ✅ **생산성 향상**: 17배
- ✅ **개발 도구**: Kiro IDE (AI 페어 프로그래밍)
- ✅ **품질**: 프로덕션 레벨 달성

자세한 내용은 [프로젝트 히스토리](../docs/PROJECT_HISTORY.md)를 참고하세요.

## 📖 문서

- **[프로젝트 히스토리](../docs/PROJECT_HISTORY.md)** - 프로젝트 탄생 배경과 개발 과정
- **[기술 스택 문서](../docs/tech-stack/)** - 각 기술 스택 상세 분석
- **[배포 가이드](../VERCEL_DEPLOY.md)** - Vercel 배포 방법
- **[변경 로그](../CHANGELOG.md)** - 버전별 변경 사항
- **[기여 가이드](../CONTRIBUTING.md)** - 기여 방법
- **[보안 정책](../SECURITY.md)** - 보안 취약점 보고

## 🔧 GitHub 설정

이 폴더에는 GitHub 관련 설정 파일들이 포함되어 있습니다:

- **workflows/**: GitHub Actions CI/CD 워크플로우
- **ISSUE_TEMPLATE/**: 이슈 템플릿
- **pull_request_template.md**: PR 템플릿
- **CODE_OF_CONDUCT.md**: 행동 강령
- **FUNDING.yml**: 스폰서 설정

### GitHub Actions Secrets

CI/CD가 작동하려면 다음 secrets를 설정해야 합니다:

1. GitHub 저장소 > Settings > Secrets and variables > Actions
2. 다음 secrets 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `DATABASE_URL`

## 🤝 기여하기

기여는 언제나 환영합니다! [CONTRIBUTING.md](../CONTRIBUTING.md)를 참고해주세요.

### 기여 방법
1. 저장소를 Fork합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📞 문의

- 기술 문의: sales@com.dooray.com
- 영업 문의: sales@com.dooray.com
- GitHub Issues: https://github.com/ez2sarang/ai-saas-starter-kit/issues

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](../LICENSE) 파일을 참고해주세요.

---

Made with ❤️ by [ez2sarang](https://github.com/ez2sarang)

**Powered by Kiro IDE** - AI 페어 프로그래밍으로 개발되었습니다.
