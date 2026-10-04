# SAMA Store — Stage 11: Product Images

Added a real product image workflow for the current Node/Next.js deployment model.

## Admin image management
- Admin-only multipart upload endpoint: `POST /api/admin/products/:id/images`
- Accepted formats: JPEG, PNG, WEBP, AVIF
- Maximum file size: 5 MB
- Files are stored under `public/uploads/products/`
- Gallery records are stored in `ProductImage`
- Delete image and clean local file
- Reorder gallery images; first image is the primary image

## Storefront
- Product detail page displays the gallery with thumbnails
- Product cards and related products use the primary image when available
- Products without an uploaded image keep the existing placeholder

## Database
The existing `ProductImage` model is used; no schema change is required in this stage.

## Important deployment note
Local filesystem uploads are appropriate for a self-hosted Node server or development. For serverless/ephemeral hosting, replace the storage layer with an object-storage provider (S3-compatible, Cloudinary, etc.) later without changing the ProductImage data model.
