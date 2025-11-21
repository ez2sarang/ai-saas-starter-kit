import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { documents, chat_history, api_usage } from '@/drizzle/schema';
import { ensureUserExists } from '@/lib/auth-helpers';
import { eq, count, sum, sql } from 'drizzle-orm';
import { FileText, MessageSquare, Activity, Zap } from 'lucide-react';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  await ensureUserExists(user);

  const [documentsCount] = await db
    .select({ count: count() })
    .from(documents)
    .where(eq(documents.user_id, user.id));

  const [chatsCount] = await db
    .select({ count: count() })
    .from(chat_history)
    .where(eq(chat_history.user_id, user.id));

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [monthlyUsage] = await db
    .select({ count: count() })
    .from(api_usage)
    .where(
      sql`${api_usage.user_id} = ${user.id} AND ${api_usage.created_at} >= ${startOfMonth.toISOString()}`
    );

  const [tokensUsed] = await db
    .select({ total: sum(chat_history.tokens_used) })
    .from(chat_history)
    .where(eq(chat_history.user_id, user.id));

  const stats = [
    {
      icon: FileText,
      label: '총 문서',
      value: documentsCount.count,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: MessageSquare,
      label: '총 대화',
      value: chatsCount.count,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Activity,
      label: '이번 달 API 호출',
      value: monthlyUsage.count,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Zap,
      label: '사용된 토큰',
      value: Number(tokensUsed.total || 0).toLocaleString(),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          AI 문서 검색 플랫폼에 오신 것을 환영합니다
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">빠른 시작</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/dashboard/documents"
            className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            <FileText className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-semibold mb-1">문서 업로드</h3>
            <p className="text-sm text-muted-foreground">
              새 문서를 업로드하고 AI로 분석하세요
            </p>
          </a>
          <a
            href="/dashboard/chat"
            className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            <MessageSquare className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-semibold mb-1">AI 채팅</h3>
            <p className="text-sm text-muted-foreground">
              문서에 대해 질문하고 답변을 받으세요
            </p>
          </a>
          <a
            href="/dashboard/settings"
            className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            <Activity className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-semibold mb-1">설정</h3>
            <p className="text-sm text-muted-foreground">
              LLM 제공자 및 API 키를 설정하세요
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
