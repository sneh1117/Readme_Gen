import React, { useState } from "react";
import Form from "./components/Form";
import TemplatePicker from "./components/TemplatePicker";
import MarkdownEditor from "./components/MarkdownEditor";
import CopyButton from "./components/CopyButton";
import { generateMarkdown } from "./utils/generateMarkdown";
import { generateAIReadme } from "./utils/aiGenerate";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [aiMarkdown, setAiMarkdown] = useState("");
  const [activeTemplate, setActiveTemplate] = useState(null);

  const markdown = aiMarkdown || generateMarkdown(formData);

  const handleTemplateSelect = (template) => {
    setActiveTemplate(template.id);
    setAiMarkdown("");
    setFormData({ ...formData, ...template.data });
  };

  const downloadFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
  };

  const handleAIGenerate = async () => {
    if (!formData.title || !formData.description) {
      alert("Enter title and description first!");
      return;
    }
    setLoading(true);
    try {
      const result = await generateAIReadme(formData.title, formData.description);
      setAiMarkdown(result);
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {/* LEFT SIDE */}
      <div className="card left-card">
        <h1 className="title">🚀 README Generator</h1>
        <p className="hint">
          ✨ Pick a template or enter <strong>Title</strong> &amp; <strong>Description</strong> and click Generate
        </p>

        <TemplatePicker onSelect={handleTemplateSelect} activeId={activeTemplate} />

        <Form formData={formData} setFormData={setFormData} />

        <div className="action-buttons">
          <button className="btn-primary" onClick={handleAIGenerate} disabled={loading}>
            {loading ? (
              <span className="loading-text">
                <span className="spinner" /> Generating...
              </span>
            ) : (
              "🤖 Generate README with AI"
            )}
          </button>

          <div className="secondary-buttons">
            <CopyButton text={markdown} />
            <button className="btn-secondary" onClick={downloadFile}>
              ⬇️ Download .md
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="card right-card">
        <MarkdownEditor
          value={markdown}
          onChange={(val) => setAiMarkdown(val)}
        />
      </div>
    </div>
  );
}

export default App;