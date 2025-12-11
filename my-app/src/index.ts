import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    title: "Govly API",
    govdata: "/govdata",
  });
});

export default app;