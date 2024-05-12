import { client } from "../configs/Db.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

interface Booking {
  bookingStartDate: Date;
  bookingEndDate: Date;
  invoice: string;
  itemId: ObjectId;
  total: number;
  memberId: ObjectId;
  bankId: ObjectId;
  payment: Payment;
}

interface Payment {
  proofPayment: string;
  bankFrom: string;
  accountHolder: string;
  status: string;
}

export const BookingSchema = client.collection<Booking>("bookings");
