import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCLoOfYZf3bL9uekDTtpKmN8B2DuHUXEWc";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runGemini(input) {
  if (!input) return "invalid input";
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });
  try {
    const result = await chatSession.sendMessage(input);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default runGemini;
