import React from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg: #0e0e11;
    --surface: #16161a;
    --surface2: #1e1e24;
    --border: #2a2a35;
    --accent: #7b61ff;
    --accent2: #00d4aa;
    --text: #e8e8f0;
    --text-muted: #7a7a8c;
    --font: 'Syne', sans-serif;
    --mono: 'JetBrains Mono', monospace;
  }

  body { background: var(--bg); color: var(--text); margin: 0; font-family: var(--font); }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .landing {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background: var(--bg);
    background-image: radial-gradient(ellipse at 20% 20%, #1a1040 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 80%, #0a2a22 0%, transparent 50%);
  }

  .blob { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .blob-1 { width: 500px; height: 500px; background: rgba(123,97,255,0.12); top: -100px; left: -100px; }
  .blob-2 { width: 400px; height: 400px; background: rgba(0,212,170,0.08); bottom: 100px; right: -80px; }

  .landing-nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 40px; position: relative; z-index: 10; }

  .nav-logo { font-family: var(--font); font-size: 1.1rem; font-weight: 800; background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .nav-cta { padding: 8px 18px; background: transparent; border: 1px solid var(--border); border-radius: 20px; color: var(--text-muted); font-family: var(--font); font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
  .nav-cta:hover { border-color: var(--accent); color: var(--text); }

  .hero { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 60px 40px 40px; position: relative; z-index: 10; max-width: 800px; margin: 0 auto; width: 100%; }

  .hero-badge { display: inline-block; padding: 6px 16px; background: rgba(123,97,255,0.12); border: 1px solid rgba(123,97,255,0.3); border-radius: 20px; color: var(--accent); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; margin-bottom: 24px; }

  .hero-title { font-family: var(--font); font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; color: var(--text); margin-bottom: 20px; }

  .gradient-text { background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .hero-sub { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; max-width: 560px; margin-bottom: 32px; }

  .hero-actions { display: flex; gap: 14px; margin-bottom: 48px; flex-wrap: wrap; justify-content: center; }

  .btn-hero { padding: 14px 28px; background: linear-gradient(135deg, var(--accent), #5b41df); border: none; border-radius: 12px; color: white; font-family: var(--font); font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
  .btn-hero:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(123,97,255,0.4); }

  .btn-ghost { padding: 14px 28px; background: transparent; border: 1px solid var(--border); border-radius: 12px; color: var(--text-muted); font-family: var(--font); font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; }
  .btn-ghost:hover { border-color: var(--accent2); color: var(--accent2); }

  .terminal { width: 100%; max-width: 640px; background: #0a0a0d; border: 1px solid var(--border); border-radius: 14px; overflow: hidden; text-align: left; }

  .terminal-bar { display: flex; align-items: center; gap: 7px; padding: 12px 16px; background: var(--surface2); border-bottom: 1px solid var(--border); }

  .dot { width: 11px; height: 11px; border-radius: 50%; }
  .dot.red { background: #ff5f57; }
  .dot.yellow { background: #febc2e; }
  .dot.green { background: #28c840; }

  .terminal-title { font-family: var(--mono); font-size: 0.75rem; color: var(--text-muted); margin-left: 8px; }

  .terminal-body { padding: 20px 24px; font-family: var(--mono); font-size: 0.82rem; line-height: 1.7; color: var(--text); }

  .t-purple { color: #c792ea; font-weight: 600; }
  .t-teal   { color: var(--accent2); font-weight: 600; }
  .t-muted  { color: var(--text-muted); }
  .t-code   { color: #82aaff; }

  .features-section { padding: 60px 40px; max-width: 1000px; margin: 0 auto; width: 100%; position: relative; z-index: 10; }

  .section-label { text-align: center; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); margin-bottom: 32px; }

  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }

  .feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; transition: all 0.2s; }
  .feature-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .feature-icon { font-size: 1.6rem; margin-bottom: 12px; }
  .feature-card h3 { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
  .feature-card p  { font-size: 0.82rem; color: var(--text-muted); line-height: 1.6; }

  .cta-section { text-align: center; padding: 60px 40px; position: relative; z-index: 10; }
  .cta-section h2 { font-size: 1.8rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
  .cta-section p  { color: var(--text-muted); margin-bottom: 28px; }

  .landing-footer { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; border-top: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted); position: relative; z-index: 10; margin-top: auto; }

  @media (max-width: 600px) {
    .landing-nav { padding: 16px 20px; }
    .hero { padding: 40px 20px 32px; }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .btn-hero, .btn-ghost { text-align: center; justify-content: center; }
    .features-section { padding: 40px 20px; }
    .cta-section { padding: 40px 20px; }
    .landing-footer { flex-direction: column; gap: 8px; text-align: center; }
  }
`;

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <div className="landing">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <nav className="landing-nav">
          <span className="nav-logo">⚡ README.gen</span>
          <button className="nav-cta" onClick={() => navigate("/app")}>
            Launch App →
          </button>
        </nav>

        <section className="hero">
          <div className="hero-badge">✨ AI-Powered · Free to Use</div>
          <h1 className="hero-title">
            Generate <span className="gradient-text">README files</span>
            <br />that actually impress
          </h1>
          <p className="hero-sub">
            Stop writing boilerplate. Enter your project details, let AI craft a
            professional GitHub README in seconds — then edit it live.
          </p>
          <div className="hero-actions">
            <button className="btn-hero" onClick={() => navigate("/app")}>
              🚀 Generate My README
            </button>
            <a className="btn-ghost" href="https://github.com" target="_blank" rel="noreferrer">
              View on GitHub ↗
            </a>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">README.md — preview</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-purple"># MyAwesomeApp 🚀</span></p>
              <p className="t-muted">A blazing-fast full stack web application built with React and Node.js.</p>
              <br />
              <p><span className="t-teal">## Features</span></p>
              <p>✅ User authentication &nbsp; ✅ REST API &nbsp; ✅ Dark mode</p>
              <br />
              <p><span className="t-teal">## Installation</span></p>
              <p className="t-code">$ npm install && npm run dev</p>
              <br />
              <p><span className="t-muted">── Generated by README.gen ──</span></p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <p className="section-label">Everything you need</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Generation</h3>
              <p>Go from blank page to polished README in under 10 seconds with AI.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h3>Live Editor</h3>
              <p>Preview, edit, and perfect your README in split-screen — no switching tabs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>6 Templates</h3>
              <p>Start fast with templates for Full Stack, API, CLI, ML, Library, and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⬇️</div>
              <h3>Export Anywhere</h3>
              <p>Copy to clipboard or download a .md file ready to drop into any repo.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to ship better READMEs?</h2>
          <p>It's free. No signup required.</p>
          <button className="btn-hero" onClick={() => navigate("/app")}>
            Get Started Free →
          </button>
        </section>

        <footer className="landing-footer">
          <span>Built with React + Gemini AI</span>
          <span>© 2025 README.gen</span>
        </footer>
      </div>
    </>
  );
}

export default Landing;