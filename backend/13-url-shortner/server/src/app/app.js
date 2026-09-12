import express from "express";
import urlRoutes from "../routes/url.routes.js";
import urlModel from "../models/url.model.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/url", urlRoutes);

app.get("/:code", async (req, res) => {
  const { code } = req.params;

  const url = await urlModel.findOne({ shortCode: code });

  await urlModel.findOneAndUpdate(
    { shortCode: code },
    { $inc: { clicks: 1 } },
    { new: true },
  );

  res.redirect(302, url.originalUrl);
});

export default app;
