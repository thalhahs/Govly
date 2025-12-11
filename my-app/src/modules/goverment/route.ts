import { Hono } from "hono";
import { Goverment, dataGoverments } from "./data";

export const govermentRoute = new Hono();

govermentRoute.get("/", (c) => {
  return c.json(dataGoverments);
});

govermentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const foundGoverment = dataGoverments.find(
    (goverment: Goverment) => goverment.slug === slug
  );

  if (!foundGoverment) {
    return c.notFound();
  }

  return c.json(foundGoverment);
});