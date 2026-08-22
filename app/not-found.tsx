import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 text-8xl font-bold tracking-tight text-primary">404</div>

        <h1 className="mb-3 text-2xl font-semibold text-foreground">صفحه پیدا نشد</h1>

        <p className="mb-8 text-sm leading-6 text-muted-foreground">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
