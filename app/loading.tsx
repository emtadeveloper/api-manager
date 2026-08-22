export default function Loading() {
  return (
    <div className="my-10 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-app-border border-t-app-primary" />
        <p className="text-sm text-app-text-muted">در حال بارگذاری...</p>
      </div>
    </div>
  );
}
