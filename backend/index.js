import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connectDb.js";
import authRoutes from "./Routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import todoRoutes from "./Routes/todo.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const corsOptions = {
  origin: "https://uphill-tech.com",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json()); 
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);
app.use('/', (req, res) => {
  res.send('API is working');
});

  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });


app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port:", PORT);
});
