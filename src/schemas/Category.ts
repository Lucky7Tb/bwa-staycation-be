import { client } from "../configs/Db.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

interface Category {
  name: string;
  itemId: ObjectId[];
}

export const CategorySchema = client.collection<Category>("categories");
