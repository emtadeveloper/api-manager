# API Manager Backend

این پوشه یک پروژه‌ی مستقل NestJS است و بدون وابستگی به پروژه‌ی Frontend اجرا می‌شود. Prisma، ماژول‌های API و فایل SQLite همگی داخل همین پوشه هستند.

## اجرا

```bash
nvm use 22.22.3
npm install
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```

## رفع خطای better-sqlite3

این پروژه از ماژول native استفاده می‌کند؛ نسخه‌ی Node هنگام نصب و اجرا باید یکی باشد. اگر خطای `NODE_MODULE_VERSION` دیدید، با Node 22 وابستگی را rebuild کنید:

```bash
nvm use 22.22.3
node -p "process.versions.modules" # باید 127 باشد
npm run native:rebuild
```

Backend روی `http://localhost:4000` اجرا می‌شود و همه‌ی مسیرها با `/api` شروع می‌شوند.

## تنظیمات

مقادیر `.env.example` را در `.env` قرار دهید:

- `PORT`: پورت Backend
- `FRONTEND_ORIGIN`: آدرس Frontend برای CORS
- `AUTH_SECRET`: کلید امضای Session
- `SQLITE_DATABASE_PATH`: مسیر SQLite نسبت به ریشه‌ی همین پروژه؛ مقدار پیش‌فرض `./data/ApiManagerDB.sqlite3` است.

## ماژول‌ها

- `auth`: ورود، خروج و Session Cookie
- `users`: مدیریت کاربر اولیه و کاربران
- `database-settings`: تنظیمات دیتابیس اصلی
- `rest-services`: CRUD سرویس‌ها و تست APIهای خارجی
- `external-database`: اتصال و خواندن PostgreSQL، SQL Server و Oracle
- `gateway`: اجرای سرویس‌های ثبت‌شده از مسیر `/api/v1/gateway/*`
