import { Hono } from "hono";
import { logger } from "hono/logger";

import { govermentRoute } from "./modules/goverment/route";
import { commonRoute } from "./modules/common/route";

const app = new Hono();

app.use(logger());

app.route("/", commonRoute);
app.route("/govdata", govermentRoute);

export default app;