import express from "express";
import cors from "cors";
import productRouter from "./routers/product.router";
import artRouter from "./routers/art.router";
import dbRouter from "./routers/db.router";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
//Serve images
app.use(express.static("resources/images/"));
// Serve client
app.use(express.static(path.join(__dirname, "..", "..", "client/build")));

//Routers
app.use("/api/product", productRouter);
app.use("/api/art", artRouter);
app.use("/api/db", dbRouter);
//As default send back client index.html
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client/build", "index.html"));
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
