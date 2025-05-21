import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./app/config/db.js";
import routes from "./app/routes/index.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || "localhost";

app.use(
  cors({
    origin: ["http://localhost:3000","http://192.168.0.124:5050/api/v1","http://localhost:5173","http://192.168.0.124:5173/","http://192.168.0.124:5173",],
    credentials: true,
  })
);
app.use(express.json());

app.use(routes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send({
    error: false,
    message: "Welcome to Udana websites",
  });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
