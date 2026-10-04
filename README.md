# SAMA Store

فروشگاه SAMA Accessoriies با Next.js، TypeScript، Tailwind و Prisma.

## اجرای پروژه

```bash
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

قبل از اجرای Prisma، مقدار `DATABASE_URL` را در `.env` قرار دهید. نمونه آن در `.env.example` قرار دارد.

### رفتار بدون دیتابیس
اگر `DATABASE_URL` تنظیم نشده باشد یا دیتابیس در دسترس نباشد، لایه محصولات به‌صورت امن از داده‌های Mock استفاده می‌کند تا صفحات فروشگاه از کار نیفتند.

### اسکریپت‌های دیتابیس
- `npm run db:generate` ساخت Prisma Client
- `npm run db:push` اعمال Schema روی دیتابیس
- `npm run db:seed` ایجاد دسته‌بندی‌ها و محصولات اولیه
