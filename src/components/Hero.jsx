import { Mail, Phone, Link2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Web Portfolio</p>
        <h1>Jude Ifenna</h1>
        <p className="hero-text">
          Full-stack developer and digital creator building clean, modern experiences with a sharp monochrome aesthetic.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:ifennaya1st@gmail.com">
            <Mail size={16} /> Email
          </a>
          <a className="button button-secondary" href="https://wa.me/2348063902370" target="_blank" rel="noreferrer">
            <Phone size={16} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-header">Contact details</div>
        <div className="card-row">
          <span>Phone</span>
          <a href="tel:+2348063902370">+234 806 390 2370</a>
        </div>
        <div className="card-row">
          <span>Email</span>
          <a href="mailto:ifennaya1st@gmail.com">ifennaya1st@gmail.com</a>
        </div>
        <div className="card-row social-row">
          <span>Socials</span>
          <div>
            <a href="https://wa.me/2348063902370" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="https://www.tiktok.com/@0x2crypto" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://x.com/0x2crypto" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#contact">
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
