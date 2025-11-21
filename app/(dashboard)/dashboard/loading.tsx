export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div>
        <div className="h-9 bg-muted rounded w-48 mb-2"></div>
        <div className="h-6 bg-muted rounded w-96"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="h-8 bg-muted rounded w-16 mb-2"></div>
            <div className="h-5 bg-muted rounded w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
