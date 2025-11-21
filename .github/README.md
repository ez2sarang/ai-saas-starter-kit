# GitHub 설정

이 폴더에는 GitHub 관련 설정 파일들이 포함되어 있습니다:

- **workflows/**: GitHub Actions CI/CD 워크플로우
- **ISSUE_TEMPLATE/**: 이슈 템플릿
- **pull_request_template.md**: PR 템플릿
- **CODE_OF_CONDUCT.md**: 행동 강령
- **FUNDING.yml**: 스폰서 설정

## GitHub Actions Secrets

CI/CD가 작동하려면 다음 secrets를 설정해야 합니다:

1. GitHub 저장소 > Settings > Secrets and variables > Actions
2. 다음 secrets 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `DATABASE_URL`
