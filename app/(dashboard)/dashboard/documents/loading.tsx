export default function DocumentsLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-9 bg-muted rounded w-32 mb-2"></div>
          <div className="h-6 bg-muted rounded w-64"></div>
        </div>
        <div className="h-10 bg-muted rounded w-32"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-muted rounded-lg"></div>
              <div className="w-4 h-4 bg-muted rounded"></div>
            </div>
            <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-1"></div>
            <div className="h-4 bg-muted rounded w-5/6 mb-4"></div>
            <div className="flex items-center justify-between">
              <div className="h-3 bg-muted rounded w-20"></div>
              <div className="h-6 bg-muted rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
