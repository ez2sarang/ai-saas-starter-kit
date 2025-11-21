# Changelog

## [0.2.0] - 2024-11-21

### Breaking Changes
- Next.js 16으로 메이저 업그레이드
- React 19로 메이저 업그레이드
- middleware.ts → proxy.ts 마이그레이션

## [0.2.0] - 2024-11-21

### Added
- Next.js 16 업그레이드 (Turbopack 지원)
- React 19 업그레이드
- Proxy 기반 인증 미들웨어 (middleware.ts → proxy.ts)
- 대시보드 실시간 통계 (문서, 대화, API 호출, 토큰 사용량)
- 로딩 및 에러 페이지 추가
- 다중 LLM 지원 (OpenAI, Google Gemini, Claude, Ollama, LM Studio)

### Changed
- ESLint 9로 업그레이드
- TypeScript strict 모드 활성화
- 빌드 성능 개선 (Turbopack)

### Fixed
- 타입 에러 수정 (null → undefined 변환)
- Stripe API 버전 호환성 수정
- 빌드 캐시 문제 해결

## [0.1.0] - 2024-11-20

### Added
- 초기 프로젝트 설정
- Supabase 인증 시스템
- 문서 관리 CRUD
- AI 채팅 기능
- 설정 페이지
- PostgreSQL + pgvector 로컬 환경 구성
