import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--dark-navy)] via-[var(--dark-slate)] to-slate-800 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)]">
              Vinod
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Data Analyst with hands-on experience in data processing, visualization, and automation. 
            Passionate about translating business requirements into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-[var(--accent-blue)] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Let's Connect
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:shendevinod9585@gmail.com" 
              className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors glow-effect"
            >
              <Mail size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vinod-shende-486a5116b/" 
              className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors glow-effect"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="tel:+917741926093" 
              className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors glow-effect"
            >
              <Phone size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
