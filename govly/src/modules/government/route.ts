import { Hono } from "hono";
import { Government, Governments, dataGovernments } from "./data";

export const governmentRoute = new Hono();

let governments: Governments = dataGovernments;

governmentRoute.get("/", (c) => {
  return c.json(governments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const government = governments.find(
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
    id: governments.length
      ? Math.max(...governments.map((item) => item.id)) + 1
      : 1,
    name: body.name,
    slug: body.slug,
    description: body.description,
    createdAt: now,
    updatedAt: now,
  };

  governments = [...governments, newGovernment];

  return c.json(newGovernment, 201);
});

governmentRoute.patch("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const government = governments.find((government) => government.id === id);

  if (!government) {
    return c.notFound();
  }

  const body = await c.req.json();

  const updatedGovernment: Government = {
    ...government,
    ...body,
    updatedAt: new Date(),
  };

  governments = governments.map((government) =>
    government.id === id ? updatedGovernment : government
  );

  return c.json(updatedGovernment);
});

governmentRoute.delete("/:id", (c) => {
  const id = Number(c.req.param("id"));

  const deletedGovernment = governments.find(
    (government) => government.id === id
  );

  if (!deletedGovernment) {
    return c.notFound();
  }

  governments = governments.filter((government) => government.id !== id);

  return c.json(deletedGovernment);
});