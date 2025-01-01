import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";  // Add this import

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

mongoose.set('strictQuery', false); // or true based on your desired behavior
/* MongoDB connection */
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true, // Removed deprecated options
})
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

/* Get __dirname equivalent */
const __filename = fileURLToPath(import.meta.url);  // Convert the current file's URL to a file path
const __dirname = path.dirname(__filename);          // Get the directory name from the file path

/* Serve static files from React frontend */
app.use(express.static(path.join(__dirname, "../frontend/build")));

/* If no API route is matched, send the React app index.html */
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

/* Default Route */
app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});
