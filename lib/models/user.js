import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: {
    first: { type: String },
    last: { type: String },
  },
  username: { type: String },
  company: { type: String },
  coverimage: { type: String },
  profileimage: { type: String },
  phone: { type: String },
  website: { type: String },
  password: { type: String },
  razorpayId: { type: String },
  razorpaySecret: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
delete mongoose.models.User;
export default mongoose.models.User || mongoose.model("User", userSchema);
