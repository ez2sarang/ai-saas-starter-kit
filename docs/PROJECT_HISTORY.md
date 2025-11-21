# 프로젝트 히스토리

## 🎯 프로젝트 목적

이 프로젝트는 **AI SaaS 애플리케이션을 위한 프로덕션 레벨 보일러플레이트 템플릿**을 만들기 위해 시작되었습니다.

### 왜 만들었는가?

1. **반복 작업 제거**
   - 새 프로젝트마다 동일한 설정 반복
   - 인증, 데이터베이스, AI 통합 등 기본 기능 재구현
   - 베스트 프랙티스 적용에 시간 소요

2. **프로덕션 준비 완료**
   - 개발 환경부터 배포까지 모든 설정 완료
   - 보안, 성능, 확장성 고려
   - 실제 서비스에 바로 사용 가능

3. **최신 기술 스택**
   - Next.js 16 + React 19
   - 다중 LLM 지원
   - 벡터 검색 (RAG) 기능

## 📅 개발 타임라인

### Phase 1: 기본 구조 (2024-11-20)

**목표:** Next.js + Supabase 기본 설정

#### 완료 항목
- ✅ Next.js 15 프로젝트 초기화
- ✅ Supabase 로컬 환경 구성
- ✅ PostgreSQL 17 + pgvector 설치
- ✅ Drizzle ORM 설정
- ✅ 기본 데이터베이스 스키마 설계

#### 주요 결정
- **Drizzle ORM 선택**: Prisma 대신 타입 안전성과 성능 우선
- **Supabase 로컬 개발**: Docker 기반 로컬 환경으로 개발 속도 향상
- **pgvector 통합**: AI/RAG 기능을 위한 벡터 검색 준비

#### 도전 과제
- PostgreSQL 17과 pgvector 호환성 확인
- Supabase 로컬 환경 설정 복잡도
- Drizzle ORM 마이그레이션 학습 곡선

### Phase 2: 인증 시스템 (2024-11-20)

**목표:** Supabase Auth 통합

#### 완료 항목
- ✅ 이메일/비밀번호 인증
- ✅ OAuth 준비 (Google, GitHub)
- ✅ 로그인/회원가입 페이지
- ✅ 인증 미들웨어 (middleware.ts)
- ✅ 세션 관리

#### 주요 결정
- **Supabase Auth 사용**: 자체 인증 구현 대신 검증된 솔루션 사용
- **Server Components 활용**: 서버에서 인증 체크로 보안 강화

#### 도전 과제
- Supabase Auth와 애플리케이션 DB 동기화
- 외래 키 제약 조건 위반 문제 해결
- `ensureUserExists` 헬퍼 함수로 해결

### Phase 3: 다중 LLM 지원 (2024-11-20)

**목표:** 여러 LLM 제공자 통합

#### 완료 항목
- ✅ OpenAI 통합
- ✅ Google Gemini 통합
- ✅ Claude 통합
- ✅ Ollama 통합 (로컬)
- ✅ LM Studio 통합 (로컬)
- ✅ 사용자별 LLM 설정 관리

#### 주요 결정
- **통합 인터페이스 설계**: 모든 LLM을 동일한 API로 사용
- **로컬 LLM 지원**: API 키 없이 사용 가능한 옵션 제공
- **사용자 선택권**: 각 사용자가 선호하는 LLM 선택

#### 기술적 도전
- 각 LLM의 다른 API 형식 통일
- System 메시지 처리 방식 차이
- 토큰 카운팅 방식 차이

### Phase 4: 다국어 지원 시도 및 제거 (2024-11-20)

**목표:** next-intl로 다국어 지원

#### 시도 내용
- next-intl 라이브러리 설치
- 한국어, 영어, 일본어, 중국어 준비
- 라우팅 구조 변경

#### 문제 발생
- 복잡한 설정으로 인한 에러 증가
- App Router와의 충돌
- 개발 속도 저하

#### 결정
- **다국어 지원 제거**: 단순성 우선
- 한국어 단일 언어로 집중
- 필요 시 나중에 추가 가능하도록 구조 유지

### Phase 5: Next.js 16 업그레이드 (2024-11-21)

**목표:** 최신 Next.js 버전으로 업그레이드

#### 시도 1: Next.js 16 테스트
- Next.js 16.0.3 설치
- Breaking Changes 확인
- middleware.ts → proxy.ts 변경 필요

#### 문제 발생
- 호환성 이슈
- 빌드 에러
- 안정성 우려

#### 결정 1: Next.js 15로 롤백
- 안정성 우선
- 프로덕션 준비 완료 우선

#### 재시도: Next.js 16 성공 (2024-11-21)
- Breaking Changes 대응 완료
- middleware.ts → proxy.ts 마이그레이션
- ESLint 9 업그레이드
- React 19 업그레이드
- 모든 테스트 통과

#### 최종 결과
- ✅ Next.js 16.0.3
- ✅ React 19.2.0
- ✅ Turbopack 활성화
- ✅ 빌드 시간 단축 (336ms)

### Phase 6: UI/UX 개선 (2024-11-21)

**목표:** 사용자 경험 향상

#### 완료 항목
- ✅ 대시보드 실시간 통계
- ✅ 로딩 스켈레톤 추가
- ✅ 에러 페이지 추가
- ✅ 반응형 디자인
- ✅ 다크 모드 준비

#### 주요 개선
- 문서 개수, 대화 수, API 호출, 토큰 사용량 표시
- 각 페이지별 loading.tsx 추가
- 에러 바운더리 구현

### Phase 7: GitHub 배포 준비 (2024-11-21)

**목표:** 오픈소스 프로젝트로 공개

#### 완료 항목
- ✅ LICENSE (MIT) 추가
- ✅ CONTRIBUTING.md 작성
- ✅ SECURITY.md 작성
- ✅ GitHub 템플릿 (Issue, PR)
- ✅ GitHub Actions CI/CD
- ✅ README 개선
- ✅ 기술 스택 문서 작성

#### 주요 결정
- **MIT 라이선스**: 자유로운 사용 허용
- **영업/기술 문의**: sales@com.dooray.com
- **커뮤니티 중심**: 기여 환영

## 🏗️ 아키텍처 진화

### 초기 구조
```
Next.js 15 + Supabase + Drizzle ORM
```

### 현재 구조
```
Next.js 16 (Turbopack)
├── React 19 (Server/Client Components)
├── TypeScript 5.3 (Strict Mode)
├── Supabase (Auth + PostgreSQL + pgvector)
├── Drizzle ORM (Type-safe queries)
├── Multi-LLM (OpenAI, Gemini, Claude, Ollama, LM Studio)
├── shadcn/ui + Tailwind CSS
├── TanStack Query (Server state)
└── Vercel (Deployment)
```

## 💡 주요 학습 및 인사이트

### 1. 타입 안전성의 중요성
- Drizzle ORM의 타입 추론으로 런타임 에러 감소
- Zod 스키마 검증으로 API 안정성 향상
- TypeScript strict 모드로 버그 조기 발견

### 2. Server Components의 힘
- 데이터베이스 직접 접근으로 API 레이어 제거
- 번들 크기 감소
- SEO 최적화

### 3. 다중 LLM 지원의 가치
- 사용자 선택권 제공
- 비용 최적화 가능
- 벤더 종속성 회피

### 4. 로컬 개발 환경의 중요성
- Supabase 로컬 환경으로 개발 속도 향상
- Docker로 일관된 환경 제공
- 오프라인 개발 가능

### 5. 단순성 우선
- 다국어 지원 제거로 복잡도 감소
- 필요한 기능만 구현
- 확장 가능한 구조 유지

## 🎓 기술적 도전과 해결

### 도전 1: Supabase Auth와 DB 동기화
**문제:** 외래 키 제약 조건 위반
```
Error: insert or update on table "user_settings" violates 
foreign key constraint "user_settings_user_id_users_id_fk"
```

**원인:** Supabase Auth의 사용자는 있지만 애플리케이션 DB에는 없음

**해결:**
```typescript
// lib/auth-helpers.ts
export async function ensureUserExists(authUser: User) {
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, authUser.id));

  if (!existingUser) {
    await db.insert(users).values({
      id: authUser.id,
      email: authUser.email!,
      name: authUser.user_metadata?.name,
    });
  }
}
```

### 도전 2: Date 객체를 SQL 쿼리에 사용
**문제:** TypeError: The "string" argument must be of type string

**원인:** Date 객체를 직접 SQL에 전달

**해결:**
```typescript
// ❌ 잘못된 방법
sql`${api_usage.created_at} >= ${startOfMonth}`

// ✅ 올바른 방법
sql`${api_usage.created_at} >= ${startOfMonth.toISOString()}`
```

### 도전 3: Next.js 16 마이그레이션
**문제:** middleware.ts가 proxy.ts로 변경

**해결:**
1. middleware.ts 파일명을 proxy.ts로 변경
2. export function middleware → export function proxy
3. 모든 기능 동일하게 작동

### 도전 4: ESLint 9 호환성
**문제:** eslint-config-next와 ESLint 9 충돌

**해결:**
- ESLint 대신 TypeScript 타입 체크 사용
- `npm run lint` → `tsc --noEmit`
- 빌드 시 자동 타입 체크

## 📊 프로젝트 통계

### 코드 규모
- **총 파일 수**: 132개
- **TypeScript 파일**: 50+개
- **API Routes**: 8개
- **페이지**: 6개
- **컴포넌트**: 20+개

### 기술 스택
- **프레임워크**: 1개 (Next.js)
- **데이터베이스**: 1개 (PostgreSQL)
- **LLM 제공자**: 5개
- **UI 라이브러리**: 2개 (React, shadcn/ui)

### 개발 시간
- **Phase 1-2**: 1일 (기본 구조 + 인증)
- **Phase 3**: 0.5일 (다중 LLM)
- **Phase 4**: 0.5일 (다국어 시도 및 제거)
- **Phase 5**: 0.5일 (Next.js 16 업그레이드)
- **Phase 6-7**: 1일 (UI 개선 + 문서화)
- **총 개발 기간**: 약 3.5일

## 🚀 향후 계획

### 단기 (1-2주)
- [ ] 벡터 검색 (RAG) 구현
- [ ] 문서 임베딩 자동화
- [ ] Stripe 결제 통합
- [ ] 이메일 알림

### 중기 (1-2개월)
- [ ] 팀 협업 기능
- [ ] API 키 관리
- [ ] 사용량 대시보드
- [ ] 웹훅 지원

### 장기 (3-6개월)
- [ ] 모바일 앱
- [ ] 플러그인 시스템
- [ ] 마켓플레이스
- [ ] 엔터프라이즈 기능

## 🤝 기여자

### 메인 개발자
- **ez2sarang** - 초기 개발 및 아키텍처 설계

### 기여 방법
이 프로젝트는 오픈소스입니다. 기여를 환영합니다!
- GitHub Issues: 버그 리포트, 기능 제안
- Pull Requests: 코드 기여
- 문서 개선: 오타 수정, 번역 등

## 📞 문의

- **기술 문의**: sales@com.dooray.com
- **영업 문의**: sales@com.dooray.com
- **GitHub**: https://github.com/ez2sarang/ai-saas-starter-kit

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:

- **Next.js** - Vercel
- **React** - Meta
- **Supabase** - Supabase Inc.
- **Drizzle ORM** - Drizzle Team
- **shadcn/ui** - shadcn
- **Tailwind CSS** - Tailwind Labs

그리고 이 프로젝트를 사용하고 기여해주시는 모든 분들께 감사드립니다! 🎉
