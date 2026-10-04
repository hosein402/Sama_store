# SAMA Store — Stage 10 Product Management Pro

- Professional admin product table with search and filters.
- Sort by newest, sold, lowest/highest price.
- Fast stock editing and active/inactive toggle.
- Bulk activate/deactivate.
- Product edit/create form with SKU and weight.
- Prisma Product now supports `isActive`, `sku`, `weight` and a `ProductImage` gallery model.

## Database
Run after setting DATABASE_URL:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

Existing products remain compatible because new fields have defaults or are nullable.
