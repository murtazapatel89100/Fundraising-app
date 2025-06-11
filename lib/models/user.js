import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: {
    first: { type: String },
    last: { type: String },
  },
  username: { type: String },
  coverimage: { type: String },
  profileimage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export default mongoose.models.User || model("User", userSchema);
