import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor({ value, onChange }) {
  const [mode, setMode] = useState("preview"); // "edit" | "preview" | "split"

  return (
    <div className="md-editor">
      <div className="md-toolbar">
        <span className="md-toolbar-label">README Preview</span>
        <div className="md-tabs">
          <button
            className={`md-tab ${mode === "preview" ? "active" : ""}`}
            onClick={() => setMode("preview")}
          >
            👁 Preview
          </button>
          <button
            className={`md-tab ${mode === "edit" ? "active" : ""}`}
            onClick={() => setMode("edit")}
          >
            ✏️ Edit
          </button>
          <button
            className={`md-tab ${mode === "split" ? "active" : ""}`}
            onClick={() => setMode("split")}
          >
            ⚡ Split
          </button>
        </div>
      </div>

      <div className={`md-body ${mode}`}>
        {(mode === "edit" || mode === "split") && (
          <textarea
            className="md-textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your README markdown will appear here. You can edit it directly..."
            spellCheck={false}
          />
        )}
        {(mode === "preview" || mode === "split") && (
          <div className="md-preview">
            {value ? (
              <ReactMarkdown>{value}</ReactMarkdown>
            ) : (
              <p className="md-empty">Generate a README to see the preview here...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}