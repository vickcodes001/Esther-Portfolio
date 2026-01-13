import React, { useState } from "react";

// Navigation links data
const navLinks = [
  { id: 1, label: "Projects", path: "/projects" },
  { id: 2, label: "About Me", path: "/about" },
  { id: 3, label: "Design Process", path: "/design-process" },
  { id: 4, label: "Contact Me", path: "/contact" },
];

/**
 * NavBar Component with Mobile Menu
 * Displays a fixed navbar with hamburger menu for mobile devices
 */
const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle mobile menu open/closed
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Close menu when a link is clicked
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl bg-white/80 backdrop-blur-md border border-[#F6F8FA] rounded-[48px] shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img src="images/profile-pic.webp" alt="Profile" />
            </div>
            <span className="text-lg tracking-tight text-gray-900 font-reem whitespace-nowrap">
              ONYEWUCHI ESTHER
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/resume"
              className="flex items-center gap-2 bg-emerald-900 text-white px-6 py-3 rounded-2xl hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              My Resume
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Dark backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-6 right-[5%] z-50 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl md:hidden animate-in slide-in-from-top-4 duration-300">
            <div className="p-8">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="images/profile-pic.webp" alt="Profile" />
                  </div>
                  <span className="text-lg tracking-tight text-gray-900 font-reem">
                    ONYEWUCHI ESTHER
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-6 mb-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={closeMenu}
                    className="block text-xl text-gray-900 hover:text-emerald-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Resume Button */}
              <a
                href="/resume"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-emerald-900 text-white px-6 py-4 rounded-2xl hover:bg-emerald-800 transition-colors shadow-sm w-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                My Resume
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
