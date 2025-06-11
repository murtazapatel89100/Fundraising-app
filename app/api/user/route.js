import connectDb from "@/db/connectdb";
import { NextResponse } from "next/server";
import User from "@/lib/models/user";

export async function POST(req) {
  try {
    await connectDb();
    const { email, firstName, lastName } = await req.json();
    if (!email || !firstName || !lastName) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    const user = await User.findOneAndUpdate(
      { email: { $regex: new RegExp(`^${email}$`, "i") } },
      {
        $set: {
          "name.first": firstName,
          "name.last": lastName,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Name updated", user });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
