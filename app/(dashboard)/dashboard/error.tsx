'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
      <div className="text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
        <h2 className="text-2xl font-bold">문제가 발생했습니다</h2>
        <p className="text-muted-foreground">
          {error.message || '알 수 없는 오류가 발생했습니다'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
