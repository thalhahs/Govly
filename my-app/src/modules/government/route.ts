import { Hono } from "hono";
import { Government, dataGovernments } from "./data";

export const governmentRoute = new Hono();

governmentRoute.get("/", (c) => {
  return c.json(dataGovernments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const animal = dataGovernments.find(
    (government: Government) => government.slug === slug
  );

  if (!animal) {
    return c.notFound();
  }

  return c.json(animal);
});
