import mongoose, { mongo } from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// const ATLAS_URI = process.env.MONGO_URI;
// const LOCAL_URI = process.env.MONGO_URI_c;

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(ATLAS_URI);
//     console.log("✅ Connected to MongoDB Atlas");
//   } catch (error) {
//     console.warn("⚠️ Atlas connection failed. Trying local MongoDB...");

//     try {
//       await mongoose.connect(LOCAL_URI);
//       console.log("✅ Connected to local MongoDB (Compass)");
//     } catch (err) {
//       console.error("❌ Failed to connect to both Atlas and local MongoDB.");
//       console.error(err);
//       process.exit(1);
//     }
//   }
// };
