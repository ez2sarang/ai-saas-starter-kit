export default function ChatLoading() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-pulse">
      <div className="mb-6">
        <div className="h-9 bg-muted rounded w-32 mb-2"></div>
        <div className="h-6 bg-muted rounded w-96"></div>
      </div>

      <div className="flex-1 bg-card border border-border rounded-lg overflow-hidden flex flex-col">
        <div className="flex-1 p-6 space-y-4">
          <div className="flex justify-end">
            <div className="max-w-[70%] h-16 bg-muted rounded-lg"></div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[70%] h-24 bg-muted rounded-lg"></div>
          </div>
        </div>
        <div className="p-4 border-t border-border">
          <div className="h-10 bg-muted rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
