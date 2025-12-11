import { Hono } from "hono";
import { Government, dataGovernments } from "./data";

export const governmentRoute = new Hono();

governmentRoute.get("/", (c) => {
  return c.json(dataGovernments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const foundGovernment = dataGovernments.find(
    (government: Government) => government.slug === slug
  );

  if (!foundGovernment) {
    return c.notFound();
  }

  return c.json(foundGovernment);
});
