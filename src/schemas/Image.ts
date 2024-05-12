import { client } from "../configs/Db.ts";

interface Image {
  imageUrl: string;
}

export const ImageSchema = client.collection<Image>("images");
