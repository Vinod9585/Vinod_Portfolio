import { useState, useEffect } from "react";
import { Menu, X, TrendingUp, Database } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[var(--dark-navy)]/90 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 hover:scale-105 transition-transform group"
          >
            {/* Modern geometric logo */}
            <div className="relative w-10 h-10">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-2 border-[var(--accent-blue)] rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              
              {/* Inner content area */}
              <div className="absolute inset-2 bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-green)]/20 rounded-sm flex items-center justify-center">
                {/* Stylized data bars */}
                <div className="flex items-end space-x-1">
                  <div className="w-1 h-2 bg-[var(--accent-blue)] rounded-full"></div>
                  <div className="w-1 h-4 bg-[var(--accent-green)] rounded-full"></div>
                  <div className="w-1 h-3 bg-[var(--accent-orange)] rounded-full"></div>
                  <div className="w-1 h-5 bg-[var(--accent-blue)] rounded-full"></div>
                </div>
              </div>
              
              {/* Glowing dot accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent-green)] rounded-full animate-pulse"></div>
            </div>
            
            {/* Brand text */}
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-none">Vinod</span>
              <span className="text-sm font-semibold text-[var(--accent-green)] leading-none">Shende</span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-[var(--accent-blue)] transition-colors relative ${
                  activeSection === item.id ? "text-[var(--accent-blue)]" : "text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-[var(--accent-blue)]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left hover:text-[var(--accent-blue)] transition-colors ${
                    activeSection === item.id ? "text-[var(--accent-blue)]" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
