interface LoadingStateProps {
  rows?: number;
}

export default function LoadingState({ rows = 4 }: LoadingStateProps) {
  return (
    <div
      className="space-y-3 p-4"
      aria-label="در حال بارگذاری"
      aria-busy="true"
    >
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          className="h-12 animate-pulse rounded-[var(--app-radius-sm)] bg-[var(--app-surface-light)]"
        />
      ))}
    </div>
  );
}
