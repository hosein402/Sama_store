# SAMA Store — Stage 8 Admin

Added an ADMIN-only dashboard at `/admin`, product management at `/admin/products`, and order status management at `/admin/orders`.

Security:
- Admin APIs require the signed session and `role=ADMIN`.
- Customers receive 403 from admin APIs.

To create/promote an admin in development, update a user in Prisma Studio or SQL:
`UPDATE "User" SET role='ADMIN' WHERE phone='YOUR_PHONE';`

No payment gateway is included.
