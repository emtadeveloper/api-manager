# API Manager Backend

این پوشه یک پروژه‌ی مستقل NestJS است و بدون وابستگی به پروژه‌ی Frontend اجرا می‌شود. TypeORM، ماژول‌های API و فایل SQLite همگی داخل همین پوشه هستند.

## اجرا

```bash
nvm use 22.22.3
npm install
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
- `JWT_SECRET`: کلید JWT با حداقل ۳۲ کاراکتر
- `JWT_REFRESH_SECRET`: کلید JWT نوسازی؛ در صورت تنظیم‌نشدن از JWT_SECRET مشتق می‌شود
- `JWT_EXPIRES_IN`: عمر توکن دسترسی، مقدار پیش‌فرض `1d`
- `JWT_REFRESH_EXPIRES_IN`: عمر توکن نوسازی، مقدار پیش‌فرض `7d`
- `SQLITE_DATABASE_PATH`: مسیر SQLite نسبت به ریشه‌ی همین پروژه؛ مقدار پیش‌فرض `./data/ApiManagerDB.sqlite3` است.

نمونه تنظیمات در فایل `.env.example` قرار دارد. در محیط production مقدار `TYPEORM_SYNCHRONIZE` را خاموش کنید و migrationهای TypeORM را استفاده کنید.

## ماژول‌ها

- `auth`: ثبت‌نام، ورود، خروج، نوسازی JWT و Session Cookie امن
- `users`: مدیریت کاربر اولیه و کاربران
- `database-settings`: تنظیمات دیتابیس اصلی
- `rest-services`: CRUD سرویس‌ها و تست APIهای خارجی
- `external-database`: اتصال و خواندن PostgreSQL، SQL Server و Oracle
- `gateway`: اجرای سرویس‌های ثبت‌شده از مسیر `/api/v1/gateway/*`
