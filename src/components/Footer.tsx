import React from "react";
import { Link } from "react-router-dom";
import { Behance, Dribbble, LinkedIn, Twitter } from "../assets";

const footerLinks = [
  { id: 1, label: "Projects", path: "/projects" },
  { id: 2, label: "About Me", path: "/about" },
  { id: 3, label: "Design Process", path: "/design-process" },
  { id: 4, label: "Contact Me", path: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-gray-900 hover:text-gray-600 transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-8 mb-8">
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Behance} alt="Behance" className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="X (Twitter)" className="w-6 h-6" />
            </a>

            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribbble} alt="Dribbble" className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center mb-6">
            <img src="/images/KAMSO.png" alt="KAMSO" className="h-20" />
          </div>

          <div className="text-center">
            <p className="text-[#525866] text-sm">© 2025 All rights reserved</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-8">
          <div className="shrink-0">
            <img src="/images/KAMSO.png" alt="KAMSO" className="h-16" />
          </div>

          <div className="flex flex-col items-end gap-10">
            <nav className="flex items-center gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-10">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Behance} alt="Behance" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>

              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="X (Twitter)" />
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Dribbble} alt="Dribbble" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <p className="text-[#525866] text-sm whitespace-nowrap">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
