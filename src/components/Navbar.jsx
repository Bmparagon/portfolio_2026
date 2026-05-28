import { Github, Mail, Phone, Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isLightMode, toggleMode }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home">
          Jude Ifenna
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-meta">
          <button type="button" className="mode-toggle" onClick={toggleMode} aria-label="Toggle theme">
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="mailto:ifennaya1st@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="tel:+2348063902370" aria-label="Phone">
            <Phone size={18} />
          </a>
          <a href="https://github.com/BmParagon" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
