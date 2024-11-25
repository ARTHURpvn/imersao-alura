import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gemineDescription(imageBuffer) {
  const prompt = "Gere um descricao em portugues para a seguinte imagem:";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };

    const response = await model.generateContent([prompt, image]);
    return response.response.text() || "alt-text nao disponivel";
  } catch (error) {
    console.error(error.message);
    throw new Error("Falha na requisição");
  }
}
