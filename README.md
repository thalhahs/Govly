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
| `/govdata`       | GET    | Get all government departments                   | ✅        |
| `/govdata/:slug` | GET    | Get a single department by slug                  | ✅        |
| `/govdata`       | POST   | Add a new department                             | ✅        |
| `/govdata/:slug` | PATCH  | Patch (partially update) a department by slug    | ✅        |
| `/govdata/:slug` | DELETE | Delete a department by slug                      | ✅        |
