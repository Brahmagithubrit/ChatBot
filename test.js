const { OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

try {
  const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });

  console.log("OpenAIApi instance created successfully.");
} catch (error) {
  console.error("Error creating instance:", error);
}
