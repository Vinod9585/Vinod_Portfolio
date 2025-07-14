import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-[var(--dark-navy)] py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Vinod Shende. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:shendevinod9585@gmail.com" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/vinod-shende-486a5116b/" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="tel:+917741926093" className="text-gray-400 hover:text-[var(--accent-green)] transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
