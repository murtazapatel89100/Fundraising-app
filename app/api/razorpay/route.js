import { NextResponse, NextRequest } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/lib/models/payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectdb";

export const POST = async (req) => {
  await connectDb();
  const rawBody = await req.text();

  const body = new URLSearchParams(rawBody);

  console.log(body);

  // check if OrderID already exixts on the server

  const razorpay_order_id = body.get("razorpay_order_id");
  const razorpay_payment_id = body.get("razorpay_payment_id");
  const razorpay_signature = body.get("razorpay_signature");

  if (!razorpay_order_id) {
    return NextResponse.json({
      success: false,
      message: "Order ID not found in db",
    });
  }

  // Varify Payment

  let varifyPayment = validatePaymentVerification(
    {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    },
    razorpay_signature,
    process.env.RAZOR_SECRET
  );

  if (varifyPayment) {
    const updatedPayment = await payment.findOneAndUpdate(
      {
        oid: razorpay_order_id,
      },
      { done: true },
      { new: true }
    );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/user/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/user/${updatedPayment.to_user}?paymentdone=false`
    );
  }
};
