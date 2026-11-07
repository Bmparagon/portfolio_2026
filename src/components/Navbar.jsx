import { Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isLightMode, toggleMode }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Jude Ifenna home">
          J.I.
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
        </div>
      </div>
    </header>
  );
}
