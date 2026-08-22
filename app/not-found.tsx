import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-4 h-48 w-48">
        <Image src="/images/404.png" alt="صفحه پیدا نشد" fill priority className="object-contain" />
      </div>

      <h1 className="mb-2 text-2xl font-semibold text-app-text">صفحه پیدا نشد</h1>

      <p className="mb-6 text-sm text-app-text-muted">
        صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-app-primary px-5 py-2.5 text-sm font-medium text-app-background transition-colors hover:bg-app-primary-light"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
