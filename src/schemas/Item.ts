import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

export interface Item {
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
