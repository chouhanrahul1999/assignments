import mongoose, { Schema } from "mongoose";
const ObjextId = mongoose.Types.ObjectId;


const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  firstname: String,
  lastName: String,
});

const purchageSchema = new Schema({
  price: Number,
  title: String,
  description: String,
  imageUri: String,
  creatorId: ObjextId,
});

const userModel =  mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", purchageSchema);

export { userModel, courseModel };
