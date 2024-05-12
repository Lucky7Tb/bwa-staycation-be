import { client } from "../configs/Db.ts";

interface Bank {
  nameBank: string;
  nomorRekening: string;
  name: string;
  imageUrl: string;
}

export const BankSchema = client.collection<Bank>("banks");