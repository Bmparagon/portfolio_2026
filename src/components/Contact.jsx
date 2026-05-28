import { Mail, Phone, MessageCircle, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <Mail size={18} />
          <h3>Email</h3>
          <a href="mailto:ifennaya1st@gmail.com">ifennaya1st@gmail.com</a>
        </div>
        <div className="contact-card">
          <Phone size={18} />
          <h3>Phone</h3>
          <a href="tel:+2348063902370">+234 806 390 2370</a>
        </div>
        <div className="contact-card">
          <MessageCircle size={18} />
          <h3>Discord</h3>
          <p>bm_paragon</p>
        </div>
        <div className="contact-card">
          <Github size={18} />
          <h3>GitHub</h3>
          <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer">BmParagon</a>
        </div>
      </div>
    </section>
  );
}
