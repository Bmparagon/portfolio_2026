import { Sparkles, Code, Shield, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <p className="eyebrow">About</p>
        <h2>What I do</h2>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <Sparkles size={20} />
          <h3>Minimal design</h3>
          <p>Simple monochrome layouts that keep attention on your message and brand.</p>
        </div>
        <div className="about-card">
          <Code size={20} />
          <h3>Modern web</h3>
          <p>React-based frontends, clean structure, and fast page performance.</p>
        </div>
        <div className="about-card">
          <Server size={20} />
          <h3>Testnet</h3>
          <p>Smart contract testing, deployment previews, and blockchain staging environments.</p>
        </div>
        <div className="about-card">
          <Shield size={20} />
          <h3>Reliable support</h3>
          <p>Direct contact through email, WhatsApp, and social channels for fast collaboration.</p>
        </div>
      </div>
      <div className="about-copy">
        <p>
          I help businesses and creators launch polished digital experiences in a dark, restrained palette with strong typography and structured content.
        </p>
      </div>
    </section>
  );
}
