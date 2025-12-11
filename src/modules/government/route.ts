import { Hono } from "hono";
import { Government, dataGovernments } from "./data";

export const governmentRoute = new Hono();

governmentRoute.get("/", (c) => {
  return c.json(dataGovernments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const government = dataGovernments.find(
    (government) => government.slug === slug
  );

  if (!government) {
    return c.notFound();
  }

  return c.json(government);
});
