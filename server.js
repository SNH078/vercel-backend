import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectCloudinary } from "./config/cloudinary.js";

import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";


const app = express();

await connectCloudinary();

// allow multiple origins
const allowedOrigins = ["https://vercel-frontend-4tp4.vercel.app/"];

//middlewares
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Api endpoints
app.get('/', (req, res) => {
  res.send('🎉 API is running successfully!');
});

app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
