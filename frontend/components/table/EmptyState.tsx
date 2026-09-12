import { Empty } from "antd";

interface EmptyStateProps {
  description: string;
}

export default function EmptyState({ description }: EmptyStateProps) {
  return (
    <div className="app-empty-block flex min-h-40 items-center justify-center px-4 py-8">
      <Empty description={description} />
    </div>
  );
}
