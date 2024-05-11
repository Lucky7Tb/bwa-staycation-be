import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

export interface Activity {
  name: string;
  type: string;
  imageUrl: string;
  isPopular: boolean;
  itemId: ObjectId;
}
