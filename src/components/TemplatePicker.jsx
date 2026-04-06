import React from "react";

export const TEMPLATES = [
  {
    id: "fullstack",
    label: "🌐 Full Stack App",
    icon: "🌐",
    data: {
      title: "MyApp",
      description: "A full stack web application",
      features: "User authentication\nRESTful API\nDatabase integration\nResponsive UI",
      installation: "npm install\nnpm run dev",
      usage: "Visit http://localhost:3000 to get started",
      techStack: "React, Node.js, Express, MongoDB",
    },
  },
  {
    id: "cli",
    label: "⚡ CLI Tool",
    icon: "⚡",
    data: {
      title: "my-cli",
      description: "A command-line tool to automate tasks",
      features: "Fast execution\nCross-platform\nEasy configuration",
      installation: "npm install -g my-cli",
      usage: "my-cli --help",
      techStack: "Node.js, Commander.js",
    },
  },
  {
    id: "api",
    label: "🔌 REST API",
    icon: "🔌",
    data: {
      title: "MyAPI",
      description: "A RESTful API service",
      features: "CRUD operations\nJWT Authentication\nRate limiting\nSwagger docs",
      installation: "npm install\ncp .env.example .env\nnpm start",
      usage: "POST /api/auth/login\nGET /api/users",
      techStack: "Node.js, Express, PostgreSQL, JWT",
    },
  },
  {
    id: "library",
    label: "📦 NPM Library",
    icon: "📦",
    data: {
      title: "my-library",
      description: "A reusable JavaScript library",
      features: "Zero dependencies\nTree-shakeable\nTypeScript support\nFully tested",
      installation: "npm install my-library",
      usage: "import { myFunc } from 'my-library';\nmyFunc();",
      techStack: "TypeScript, Rollup, Jest",
    },
  },
  {
    id: "ml",
    label: "🤖 ML Project",
    icon: "🤖",
    data: {
      title: "ML Model",
      description: "A machine learning project",
      features: "Data preprocessing\nModel training\nEvaluation metrics\nInference API",
      installation: "pip install -r requirements.txt",
      usage: "python train.py\npython predict.py --input data.csv",
      techStack: "Python, PyTorch, scikit-learn, FastAPI",
    },
  },
  {
    id: "blank",
    label: "✨ Blank",
    icon: "✨",
    data: {
      title: "",
      description: "",
      features: "",
      installation: "",
      usage: "",
      techStack: "",
    },
  },
];

export default function TemplatePicker({ onSelect, activeId }) {
  return (
    <div className="template-picker">
      <p className="template-label">Start with a template</p>
      <div className="template-grid">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            className={`template-btn ${activeId === t.id ? "active" : ""}`}
            onClick={() => onSelect(t)}
          >
            <span className="template-icon">{t.icon}</span>
            <span className="template-name">{t.label.replace(t.icon + " ", "")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}