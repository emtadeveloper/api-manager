# API Manager

پروژه از دو اپلیکیشن مستقل تشکیل شده است:

- `frontend`: رابط کاربری Next.js
- `backend`: API مستقل NestJS با Prisma و SQLite

## اجرای Frontend

در ترمینال اول:

```bash
cd frontend
npm install
npm run dev
```

## اجرای Backend

در ترمینال دوم:

```bash
cd backend
nvm use 22.22.3
npm install
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```

Frontend روی پورت `3000` و Backend روی پورت `4000` اجرا می‌شود. آدرس Backend در `frontend/.env` با `NEXT_PUBLIC_API_URL` تنظیم می‌شود. دیتابیس مستقل Backend در `backend/data/ApiManagerDB.sqlite3` قرار دارد.
