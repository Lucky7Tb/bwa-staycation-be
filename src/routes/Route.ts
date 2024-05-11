import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";

export const route = new Hono().basePath("api");
