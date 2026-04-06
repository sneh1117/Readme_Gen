export const generateMarkdown = (data) => {
  return `
# ${data.title}

## 📌 Description
${data.description}

## 🛠 Tech Stack
${data.techStack}

## 🚀 Features
${data.features}

## ⚙️ Installation
\`\`\`bash
${data.installation}
\`\`\`

## ▶️ Usage
${data.usage}

## 🤝 Contributing
${data.contributing}

## 📄 License
${data.license}
  `;
};