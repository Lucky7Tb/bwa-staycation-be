import { client } from "../configs/Db.ts";

interface Member {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export const MemberSchema = client.collection<Member>("members");
