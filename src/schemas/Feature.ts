import { client } from "../configs/Db.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

interface Feature {
  name: string;
  qty: number;
  imageUrl: string;
  itemId: ObjectId;
}

export const FeatureSchema = client.collection<Feature>("features");
