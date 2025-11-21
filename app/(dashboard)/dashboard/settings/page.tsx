'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import { LLM_MODELS } from '@/lib/llm';

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const [provider, setProvider] = useState('lmstudio');
  const [model, setModel] = useState('kimi-k2-thinking');
  const [openaiKey, setOpenaiKey] = useState('');
  const [googleKey, setGoogleKey] = useState('');
  const [claudeKey, setClaudeKey] = useState('');
  const [ollamaUrl, setOllamaUrl] = useState('http://localhost:11434');
  const [lmstudioUrl, setLmstudioUrl] = useState('http://localhost:1234');

  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      const res = await fetch('/api/settings');
      const data = await res.json();
      return data.data;
    },
  });

  useEffect(() => {
    if (settings) {
      setProvider(settings.llm_provider);
      setModel(settings.llm_model);
      setOpenaiKey(settings.openai_api_key || '');
      setGoogleKey(settings.google_api_key || '');
      setClaudeKey(settings.claude_api_key || '');
      setOllamaUrl(settings.ollama_base_url || 'http://localhost:11434');
      setLmstudioUrl(settings.lmstudio_base_url || 'http://localhost:1234');
    }
  }, [settings]);

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
      alert('설정이 저장되었습니다!');
    },
  });

  const handleSave = () => {
    saveMutation.mutate({
      llm_provider: provider,
      llm_model: model,
      openai_api_key: openaiKey || null,
      google_api_key: googleKey || null,
      claude_api_key: claudeKey || null,
      ollama_base_url: ollamaUrl,
      lmstudio_base_url: lmstudioUrl,
    });
  };

  const models = LLM_MODELS[provider as keyof typeof LLM_MODELS] || [];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <SettingsIcon className="w-8 h-8" />
        <div>
          <h1 className="text-3xl font-bold">설정</h1>
          <p className="text-muted-foreground mt-2">
            AI 모델 및 API 키를 설정하세요
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">LLM 제공자</label>
          <select
            value={provider}
            onChange={(e) => {
              setProvider(e.target.value);
              const newModels = LLM_MODELS[e.target.value as keyof typeof LLM_MODELS];
              if (newModels && newModels.length > 0) {
                setModel(newModels[0].value);
              }
            }}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="lmstudio">LM Studio (로컬)</option>
            <option value="ollama">Ollama (로컬)</option>
            <option value="openai">OpenAI</option>
            <option value="google">Google Gemini</option>
            <option value="claude">Claude</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">모델</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {models.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        {provider === 'openai' && (
          <div>
            <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
            <input
              type="password"
              value={openaiKey}
              onChange={(e) => setOpenaiKey(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="sk-..."
            />
          </div>
        )}

        {provider === 'google' && (
          <div>
            <label className="block text-sm font-medium mb-2">Google API Key</label>
            <input
              type="password"
              value={googleKey}
              onChange={(e) => setGoogleKey(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="AIza..."
            />
          </div>
        )}

        {provider === 'claude' && (
          <div>
            <label className="block text-sm font-medium mb-2">Claude API Key</label>
            <input
              type="password"
              value={claudeKey}
              onChange={(e) => setClaudeKey(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="sk-ant-..."
            />
          </div>
        )}

        {provider === 'ollama' && (
          <div>
            <label className="block text-sm font-medium mb-2">Ollama Base URL</label>
            <input
              type="text"
              value={ollamaUrl}
              onChange={(e) => setOllamaUrl(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="http://localhost:11434"
            />
          </div>
        )}

        {provider === 'lmstudio' && (
          <div>
            <label className="block text-sm font-medium mb-2">LM Studio Base URL</label>
            <input
              type="text"
              value={lmstudioUrl}
              onChange={(e) => setLmstudioUrl(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="http://localhost:1234"
            />
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saveMutation.isPending}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          {saveMutation.isPending ? '저장 중...' : '설정 저장'}
        </button>
      </div>
    </div>
  );
}
