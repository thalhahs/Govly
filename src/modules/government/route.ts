import { Hono } from "hono";
import { Government, Governments } from "./data";
import { prisma } from "../../lib/prisma";

export const governmentRoute = new Hono();

governmentRoute.get("/", async (c) => {
  const governments = await prisma.government.findMany();
  return c.json(governments);
});

governmentRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  return c.json({});
});

governmentRoute.post("/", async (c) => {
  return c.json({}, 201);
});

governmentRoute.patch("/:id", async (c) => {
  const id = Number(c.req.param("id"));

  return c.json({});
});

governmentRoute.delete("/:id", (c) => {
  const id = Number(c.req.param("id"));

  return c.json({});
});
