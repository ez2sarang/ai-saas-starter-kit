import Link from 'next/link';
import { ArrowRight, Zap, Shield, Search } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            AI 기반 문서 검색 플랫폼
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            문서를 업로드하고 AI로 질문하세요. 
            벡터 검색으로 정확한 답변을 빠르게 찾아드립니다.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              무료로 시작하기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              로그인
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">빠른 검색</h3>
            <p className="text-muted-foreground">
              벡터 기반 검색으로 관련 문서를 즉시 찾아드립니다
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">안전한 보관</h3>
            <p className="text-muted-foreground">
              엔터프라이즈급 보안으로 문서를 안전하게 보관합니다
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI 답변</h3>
            <p className="text-muted-foreground">
              다양한 LLM으로 문서 내용을 분석하고 정확한 답변을 제공합니다
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
