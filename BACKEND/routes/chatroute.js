const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();

const OpenAIApi = require("openai");

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_ID,
};

const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello! how are you?" }],
    });
    console.log(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
