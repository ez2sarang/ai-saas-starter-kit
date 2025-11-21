# GitHub 배포 가이드

## 1. 저장소 생성

```bash
# GitHub에서 새 저장소 생성
# https://github.com/new
# Repository name: ai-saas-starter-kit
# Description: AI-powered document search and chatbot SaaS platform
# Public 또는 Private 선택
```

## 2. Git 초기화 및 푸시

```bash
# Git 초기화 (이미 되어있다면 생략)
git init

# 모든 파일 추가
git add .

# 초기 커밋
git commit -m "feat: Initial commit - AI SaaS Starter Kit v0.2.0"

# 원격 저장소 추가
git remote add origin https://github.com/ez2sarang/ai-saas-starter-kit.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

## 3. GitHub Secrets 설정

저장소 Settings > Secrets and variables > Actions에서 다음 secrets 추가:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
```

## 4. Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# Vercel에 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

또는 Vercel 대시보드에서:
1. https://vercel.com/new
2. GitHub 저장소 import
3. 환경 변수 설정
4. Deploy 클릭

## 5. 저장소 설정

### About 섹션
- Description: AI-powered document search and chatbot SaaS platform
- Website: Vercel 배포 URL
- Topics: nextjs, react, typescript, ai, saas, supabase, drizzle, openai, chatbot, rag

### Branch Protection
Settings > Branches > Add rule:
- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging

### GitHub Pages (선택)
Settings > Pages:
- Source: Deploy from a branch
- Branch: main / docs (문서가 있는 경우)

## 6. 배포 후 확인

- [ ] CI/CD 워크플로우 정상 작동
- [ ] Vercel 배포 성공
- [ ] 환경 변수 정상 설정
- [ ] 데이터베이스 연결 확인
- [ ] 인증 기능 테스트
- [ ] AI 채팅 기능 테스트

## 문의

- 기술 문의: sales@com.dooray.com
- 영업 문의: sales@com.dooray.com
