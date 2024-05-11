import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

export interface Feature {
  name: string;
  qty: number;
  imageUrl: string;
  itemId: ObjectId;
}
