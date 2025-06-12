import connectDb from "@/db/connectdb";
import { NextResponse } from "next/server";
import User from "@/lib/models/user";
import { z } from "zod";

const schema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  phone: z.string(),
  website: z.string(),
  username: z.string(),
  profilePicture: z.string(),
  coverPicture: z.string(),
  confirmPassword: z.string(),
  razorpayId: z.string(),
  razorpaySecret: z.string(),
});

export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    console.log("Received body:", body);
    const {
      email,
      firstName,
      lastName,
      company,
      phone,
      website,
      username,
      profilePicture,
      coverPicture,
      confirmPassword,
      razorpayId,
      razorpaySecret,
    } = schema.parse(body);
    if (!email) {
      return NextResponse.status(400).json({
        message: "Email field is Missing",
      });
    }
    if (!firstName) {
      return NextResponse.status(400).json({
        message: "firstName field is Missing",
      });
    }
    if (!lastName) {
      return NextResponse.status(400).json({
        message: "lastName field is Missing",
      });
    }
    if (!company) {
      return NextResponse.status(400).json({
        message: "company field is Missing",
      });
    }
    if (!phone) {
      return NextResponse.status(400).json({
        message: "phone field is Missing",
      });
    }
    if (!website) {
      return NextResponse.status(400).json({
        message: "website field is Missing",
      });
    }
    if (!username) {
      return NextResponse.status(400).json({
        message: "username field is Missing",
      });
    }
    if (!profilePicture) {
      return NextResponse.status(400).json({
        message: "profilePicture field is Missing",
      });
    }
    if (!coverPicture) {
      return NextResponse.status(400).json({
        message: "coverPicture field is Missing",
      });
    }
    if (!confirmPassword) {
      return NextResponse.status(400).json({
        message: "Password field is Missing",
      });
    }
    if (!razorpayId) {
      return NextResponse.status(400).json({
        message: "razorpayId field is Missing",
      });
    }
    if (!razorpaySecret) {
      return NextResponse.status(400).json({
        message: "razorpaySecret field is Missing",
      });
    }
    const user = await User.findOneAndUpdate(
      { email: { $regex: new RegExp(`^${email}$`, "i") } },
      {
        $set: {
          company: company,
          phone: phone,
          website: website,
          password: confirmPassword,
          razorpaySecret: razorpaySecret,
          razorpayId: razorpayId,
          updatedAt: new Date(),
        },
      },
      { new: true, lean: true }
    );
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("Updated user:", JSON.stringify(user, null, 2));
    return NextResponse.json({ message: "Name updated", user });
  } catch (error) {
    console.error("Update error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
