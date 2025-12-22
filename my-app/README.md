# Govly API (Bun + Hono)

Small REST-style API that serves and mutates in-memory government department data.

## Getting started
- Install dependencies:  
  ```sh
  bun install
  ```
- Start the dev server (defaults to http://localhost:3000):  
  ```sh
  bun run dev
  ```

## Routes
- `GET /` – service metadata and link to data route.
- `GET /govdata` – list all departments.
- `GET /govdata/:slug` – fetch one department by `slug`.
- `POST /govdata` – create a department. Body:
  ```json
  {
    "name": "Department of Commerce",
    "slug": "department-of-commerce",
    "description": "Commerce oversight."
  }
  ```
- `PATCH /govdata/:slug` – update any of `name`, `slug`, `description`.
- `DELETE /govdata/:slug` – remove a department; returns the deleted record.

Notes:
- Data is stored in-memory (`src/modules/government/data.ts`); restart resets changes.
- All timestamps are generated server-side.
