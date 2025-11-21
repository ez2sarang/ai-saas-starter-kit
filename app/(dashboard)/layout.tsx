import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FileText, MessageSquare, Settings, LogOut, BarChart3 } from 'lucide-react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6">
          <h1 className="text-2xl font-bold">AI SaaS</h1>
        </div>
        <nav className="px-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <BarChart3 className="w-5 h-5" />
            대시보드
          </Link>
          <Link
            href="/dashboard/documents"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <FileText className="w-5 h-5" />
            문서
          </Link>
          <Link
            href="/dashboard/chat"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            채팅
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <Settings className="w-5 h-5" />
            설정
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              {user.email?.[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.email}</p>
            </div>
            <form action="/api/auth/signout" method="post">
              <button type="submit" className="text-muted-foreground hover:text-foreground">
                <LogOut className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-8">{children}</div>
      </main>
    </div>
  );
}
