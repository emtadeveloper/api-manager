# API Manager Frontend

این پوشه یک پروژه‌ی مستقل Next.js است. Backend در پوشه‌ی هم‌سطح `../backend` قرار دارد و هیچ کد یا دیتابیس سمت سرور داخل این پروژه نگهداری نمی‌شود.

## اجرا

```bash
npm install
npm run dev
```

Frontend روی `http://localhost:3000` اجرا می‌شود و API را از مقدار `NEXT_PUBLIC_API_URL` در `.env` می‌خواند.

## بررسی و Build

```bash
npm run lint
npm run build
npm run start
```
