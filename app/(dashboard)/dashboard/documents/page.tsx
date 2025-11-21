'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, FileText, Trash2 } from 'lucide-react';

export default function DocumentsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const { data: documents, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const res = await fetch('/api/documents');
      const data = await res.json();
      return data.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      setIsCreating(false);
      setTitle('');
      setContent('');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/documents/${id}`, {
        method: 'DELETE',
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate({ title, content });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">문서</h1>
          <p className="text-muted-foreground mt-2">
            문서를 업로드하고 AI로 검색하세요
          </p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          새 문서
        </button>
      </div>

      {isCreating && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">새 문서 만들기</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">제목</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="문서 제목"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">내용</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={10}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="문서 내용을 입력하세요..."
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={createMutation.isPending}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {createMutation.isPending ? '생성 중...' : '생성'}
              </button>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents?.map((doc: any) => (
          <div
            key={doc.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <button
                onClick={() => deleteMutation.mutate(doc.id)}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-semibold mb-2">{doc.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {doc.content}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{new Date(doc.created_at).toLocaleDateString('ko-KR')}</span>
              <span
                className={`px-2 py-1 rounded-full ${
                  doc.status === 'completed'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : doc.status === 'processing'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                }`}
              >
                {doc.status === 'completed'
                  ? '완료'
                  : doc.status === 'processing'
                  ? '처리중'
                  : '실패'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {documents?.length === 0 && !isCreating && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            아직 문서가 없습니다. 첫 문서를 만들어보세요!
          </p>
        </div>
      )}
    </div>
  );
}
