import { Hono } from "hono";
import { Government, dataGovernments } from "./data";

export const governmentRoute = new Hono();

governmentRoute.get("/", (c) => {
  return c.json(dataGovernments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const government = dataGovernments.find(
    (government: Government) => government.slug === slug
  );

  if (!government) {
    return c.notFound();
  }

  return c.json(government);
});

governmentRoute.post("/", async (c) => {
  const body = await c.req.json();
  const now = new Date();

  const newGovernment: Government = {
    id: dataGovernments.length
      ? Math.max(...dataGovernments.map((item) => item.id)) + 1
      : 1,
    name: body.name,
    slug: body.slug,
    description: body.description,
    createdAt: now,
    updatedAt: now,
  };

  dataGovernments.push(newGovernment);

  return c.json(newGovernment, 201);
});

governmentRoute.patch("/:slug", async (c) => {
  const slug = c.req.param("slug");
  const government = dataGovernments.find(
    (item: Government) => item.slug === slug
  );

  if (!government) {
    return c.notFound();
  }

  const body = await c.req.json();

  if (body.name !== undefined) {
    government.name = body.name;
  }

  if (body.description !== undefined) {
    government.description = body.description;
  }

  if (body.slug !== undefined) {
    government.slug = body.slug;
  }

  government.updatedAt = new Date();

  return c.json(government);
});

governmentRoute.delete("/:slug", (c) => {
  const slug = c.req.param("slug");
  const index = dataGovernments.findIndex(
    (item: Government) => item.slug === slug
  );

  if (index === -1) {
    return c.notFound();
  }

  const [deletedGovernment] = dataGovernments.splice(index, 1);

  return c.json(deletedGovernment);
});
