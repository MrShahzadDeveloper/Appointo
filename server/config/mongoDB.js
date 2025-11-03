import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    // Connect to MongoDB (the database name is 'appointoDB')
    await mongoose.connect(`${process.env.MONGODB_URI}/appointoDB`);
    console.log("✅ Connected to MongoDB (appointoDB)");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop the server if the connection fails
  }
};
