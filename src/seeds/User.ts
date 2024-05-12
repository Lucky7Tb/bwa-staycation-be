import { UserSchema } from "../schemas/User.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

export async function run() {
  const salt = await bcrypt.genSalt(10);
  await UserSchema.insertOne({
    username: "jhondie",
    password: await bcrypt.hash("password", salt),
  });
}

