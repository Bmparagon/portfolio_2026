import { Github, Mail, Phone, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>© 2026 Jude Ifenna</p>
        <p>Designed for clarity in black, white, and gray.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:ifennaya1st@gmail.com" aria-label="Email">
          <Mail size={16} />
        </a>
        <a href="https://wa.me/2348063902370" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <Phone size={16} />
        </a>
        <a href="https://twitter.com/0x2crypto" target="_blank" rel="noreferrer" aria-label="Twitter">
          <Twitter size={16} />
        </a>
        <a href="https://www.linkedin.com/in/jude-okwudigbo-8bb5422b3" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
}
