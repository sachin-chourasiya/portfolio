import { useState, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

export default function Navigation(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    e.preventDefault();
    closeNav();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <a
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Sachin Chourasiya
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {(
            [
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ] as NavItem[]
          ).map((item: NavItem) => (
            <a
              key={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          type="button"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isNavOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isNavOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isNavOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 pb-2 space-y-2">
          {(
            [
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ] as NavItem[]
          ).map((item: NavItem) => (
            <a
              key={item.href}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
