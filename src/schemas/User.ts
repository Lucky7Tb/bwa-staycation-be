import { client } from "../configs/Db.ts";

interface User {
  username: string;
  password: string;
}

export const UserSchema = client.collection<User>("users");
