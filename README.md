## Govly API (Batch 10)

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

Open http://localhost:3000

## API Documentation

- Local: `http://localhost:3000`
- Production: _TBD_

| Endpoint          | HTTP   | Description                                      | Available |
| ---------------- | ------ | ------------------------------------------------ | --------- |
| `/`              | GET    | Get API info and link to government data        | ✅        |
| `/governments`       | GET    | Get all government departments                   | ✅        |
| `/governments/:slug` | GET    | Get a single department by slug                  | ✅        |
| `/governments`       | POST   | Add a new department                             | ✅        |
| `/governments/:slug` | PATCH  | Patch (partially update) a department by slug    | ✅        |
| `/governments/:slug` | DELETE | Delete a department by slug                      | ✅        |
