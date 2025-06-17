"use server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectdb";
import user from "@/lib/models/user";
import payment from "@/lib/models/payment";

export const initiate = async (amount, to_user, paymentfrom) => {
  await connectDb();
  var instance = new Razorpay({
    key_id: process.env.RAZOR_KEY,
    key_secret: process.env.RAZOR_SECRET,
  });
  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let order = await instance.orders.create(options);
  await payment.create({
    oid: order.id,
    amount: amount,
    to_user: to_user,
    name: paymentfrom.name,
    message: paymentfrom.message,
  });
  return order;
};
