import {
  cors,
  csrf,
  compress,
  bodyLimit,
  secureHeaders,
} from "https://deno.land/x/hono@v4.3.4/middleware.ts";
import { db } from "./configs/Db.ts";
import { env } from "./configs/Env.ts";
import { route } from "./routes/Route.ts";
import { logger } from "./configs/Logger.ts";
import { Context } from "https://deno.land/x/hono@v4.3.4/mod.ts";

export async function startApp() {
  try {
    await db.connect();
  } catch (err) {
    logger.error(`Cannot connect to database`, { ...err });
  }

  route.use(
    bodyLimit({
      maxSize: 50000 * 1024,
      onError: (c: Context) => {
        return c.json({
          code: 413,
          message: "Size body is overflow",
        });
      },
    }),
    compress({ encoding: "gzip" }),
    cors({ origin: env.ORIGIN ? env.ORIGIN.split(",") : "*" }),
    csrf({ origin: env.ORIGIN ? env.ORIGIN.split(",") : "*" }),
    secureHeaders()
  );

  route.get("/", (ctx: Context) => {
    return ctx.json(
      {
        code: 200,
        message: "Hello world",
        tes: ctx.env.TEST,
      },
      200
    );
  });

  route.notFound((ctx: Context) => {
    return ctx.json(
      {
        code: 404,
        message: "Not found",
      },
      404
    );
  });

  route.onError((err: Error, c: Context) => {
    logger.error({ ...err });
    return c.json({ code: 500, message: "Error" }, 500);
  });

  Deno.serve({ port: +env.PORT, hostname: env.HOST }, route.fetch);
}
