import { Mail, Phone, Twitter, Linkedin, Download } from 'lucide-react';
import cvFile from '../assets/CV.pdf';

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
          <a className="button button-secondary" href={cvFile} download="Jude-Ifenna-CV.pdf">
            <Download size={16} /> Download CV
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
            <a href="https://twitter.com/0x2crypto" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/jude-okwudigbo-8bb5422b3" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
