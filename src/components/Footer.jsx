import { Github, Mail, Phone, Link2 } from 'lucide-react';

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
        <a href="https://x.com/0x2crypto" target="_blank" rel="noreferrer" aria-label="X">
          <Link2 size={16} />
        </a>
        <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
}
