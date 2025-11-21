'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function RootError({
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
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
            <h1 className="text-3xl font-bold">오류가 발생했습니다</h1>
            <p className="text-muted-foreground max-w-md">
              {error.message || '알 수 없는 오류가 발생했습니다'}
            </p>
            <button
              onClick={reset}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
