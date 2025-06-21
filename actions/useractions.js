"use server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectdb";
import user from "@/lib/models/user";
import payment from "@/lib/models/payment";

export const initiate = async (amount, to_user, paymentfrom) => {
  await connectDb();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZOR_KEY,
    key_secret: process.env.RAZOR_SECRET,
  });
  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let order = await instance.orders.create(options);
  const savedPayment = await payment.create({
    oid: order.id,
    amount: amount,
    to_user: to_user,
    name: paymentfrom.name,
    message: paymentfrom.message,
    method: "Razorpay",
  });

  console.log("✅ Payment entry created:", savedPayment);
  return order;
};

export const getMessages = async (username) => {
  await connectDb();
  const payments = await payment.find({ to_user: username, done: true });
  const messages = payments.map((p) => ({
    name: p.name,
    message: p.message,
    amountdone: p.amount / 100,
  }));
  return messages;
};

export const getTotalAmount = async (admin) => {
  await connectDb();
  const payments = await payment.find({
    to_user: { $regex: `^${admin}$`, $options: "i" },
    done: true,
  });

  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

  return totalAmount / 100;
};

export const uniqueDonors = async (admin) => {
  await connectDb();
  const payments = await payment.find({
    to_user: { $regex: `^${admin}$`, $options: "i" },
    done: true,
  });

  const donorNames = payments.map((p) => p.name);
  const uniqueNames = new Set(donorNames);

  return uniqueNames.size;
};

export const latestDonationDate = async (admin) => {
  await connectDb();
  const latest = await payment
    .findOne({
      to_user: { $regex: `^${admin}$`, $options: "i" },
      done: true,
    })
    .sort({ createdAt: -1 });

  if (!latest) return "No donations yet";

  return new Date(latest.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const getAllDonations = async (admin) => {
  await connectDb();

  const payments = await payment
    .find({
      to_user: { $regex: `^${admin}$`, $options: "i" },
      done: true,
    })
    .sort({ createdAt: -1 });

  const result = payments.map((p, index) => ({
    id: index + 1,
    amount: p.amount / 100,
    donor: p.name,
    date: new Date(p.createdAt).toISOString().split("T")[0],
    method: p.method || "Unknown",
  }));

  return result;
};

export const deletePaymentsForAdmin = async (admin) => {
  await connectDb();

  const deletedDocs = await payment.find({
    to_user: { $regex: `^${admin}$`, $options: "i" },
  });

  await payment.deleteMany({
    to_user: { $regex: `^${admin}$`, $options: "i" },
  });

  const result = deletedDocs.map((p, index) => ({
    id: index + 1,
    amount: p.amount / 100,
    donor: p.name,
    date: new Date(p.createdAt).toISOString().split("T")[0],
    method: p.method || "Unknown",
  }));

  return result;
};
