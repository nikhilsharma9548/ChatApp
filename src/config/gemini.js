const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


async function runGemini(prompt) {
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;



  const requestBody = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await res.json();
    // console.log("🔥 Gemini Response:");
    // console.log(data);

    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    // console.log("✅ Gemini says:", result);
    return result;
  } catch (err) {
    // console.error("❌ Error:", err);
    return "error"
  }
}

export default runGemini;
