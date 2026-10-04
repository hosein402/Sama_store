# SAMA Store — Stage 12: Sales Reports

## Added
- Real admin sales reports backed by Prisma.
- Revenue excludes canceled and pending orders; counts PAID/PROCESSING/SHIPPED/DELIVERED as valid revenue orders.
- 7/30/90/365-day filters.
- Daily revenue chart without external chart dependency.
- Top-selling products by quantity and revenue.
- Low-stock product list.
- Average valid order value and canceled order count.
- Admin-only `/api/admin/reports` endpoint.

## Setup
```bash
npm install
npm run db:generate
npm run db:push
npm run build
```
