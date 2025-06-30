import axios from "axios";

export async function generateAIResponse(message) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  try {
    const { data } = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 60,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data.choices?.[0]?.message?.content?.trim() ?? null;
  } catch (error) {
    console.error(
      "Error generating AI response:",
      error.response?.data || error.message
    );
    return null;
  }
}
