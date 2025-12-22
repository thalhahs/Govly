import { Hono } from "hono";
import { logger } from "hono/logger";

import { governmentRoute } from "./modules/government/route";
import { commonRoute } from "./modules/common/route";

const app = new Hono();

app.use(logger());

app.route("/", commonRoute);
app.route("/governments", governmentRoute);

export default app;
