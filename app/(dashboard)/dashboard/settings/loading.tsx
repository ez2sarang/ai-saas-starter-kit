export default function SettingsLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-muted rounded"></div>
        <div>
          <div className="h-9 bg-muted rounded w-32 mb-2"></div>
          <div className="h-6 bg-muted rounded w-64"></div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <div>
          <div className="h-5 bg-muted rounded w-24 mb-2"></div>
          <div className="h-10 bg-muted rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 bg-muted rounded w-16 mb-2"></div>
          <div className="h-10 bg-muted rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 bg-muted rounded w-32 mb-2"></div>
          <div className="h-10 bg-muted rounded w-full"></div>
        </div>
        <div className="h-12 bg-muted rounded w-full"></div>
      </div>
    </div>
  );
}
