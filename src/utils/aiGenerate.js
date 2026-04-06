export const generateAIReadme = async (title, description) => {
  const response = await fetch(
    "/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate a professional GitHub README with sections:
# Title
## Description
## Features
## Installation
## Usage
## Tech Stack
Project Title: ${title}
Project Description: ${description}
Make it clean, structured, and GitHub-ready. Return only the markdown, no extra commentary.`,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || "Gemini API request failed");
  }

  const data = await response.json();
  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "⚠️ Failed to generate README."
  );
};