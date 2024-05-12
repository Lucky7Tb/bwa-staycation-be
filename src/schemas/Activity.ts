import { client } from "../configs/Db.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

interface Activity {
  name: string;
  type: string;
  imageUrl: string;
  isPopular: boolean;
  itemId: ObjectId;
}

export const ActivitySchema = client.collection<Activity>("activities");
