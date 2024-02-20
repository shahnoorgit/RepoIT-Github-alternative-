import mongoose from "mongoose";

export default async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 100000,
    });
    console.log("connected mongo");
  } catch (error) {
    console.log(error);
  }
}
