import { client } from "../configs/Db.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

interface Item {
  title: string;
  price: number;
  country: string;
  city: string;
  isPopular: boolean;
  description: string;
  unit: string;
  sumBooking: number;
  categoryId: ObjectId;
  imageId: ObjectId[];
  featureId: ObjectId[];
  activityId: ObjectId[];
}

export const ItemSchema = client.collection<Item>("items");
