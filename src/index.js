import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/db.js";
import userRoute  from "./routes/user.js";
import authRoute  from "./routes/auth.js";
import productRoute  from "./routes/product.js";
import cartRoute  from "./routes/cart.js";
import orderRoute  from "./routes/order.js";
import stripeRoute  from "./routes/stripe.js";

dotenv.config();

connectDB();
const PORT = process.env.PORT;
app.use(cors());
// router();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(PORT, () => {
  console.log("Backend server is running!");
});
