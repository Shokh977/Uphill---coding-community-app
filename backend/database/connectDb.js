import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message)
    process.exit(1); // 0 is success, 1 is failure
  }
};


