import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// API route
app.post("/api/outline", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // fast + capable
      contents: prompt,
    });

    res.json({ text: response.text });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ error: err.message || "Error generating outline" });
  }
});

const PORT = 8787;
app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
