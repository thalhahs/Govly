import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
  return c.json({
    title: "Govly API",
    govdata: "/govdata",
  });
});

export default app;