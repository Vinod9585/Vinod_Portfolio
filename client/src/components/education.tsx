import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[var(--dark-slate)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-gray-400 text-lg">Academic foundation in Computer Engineering</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--dark-navy)] p-8 rounded-2xl hover:shadow-xl hover:shadow-[var(--accent-blue)]/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-[var(--accent-blue)]/20 p-4 rounded-xl mb-6 md:mb-0 md:mr-8">
                <GraduationCap className="text-[var(--accent-blue)] text-4xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Computer Engineering</h3>
                <p className="text-[var(--accent-blue)] font-semibold text-lg mb-2">International Institute of Information Technology, Pune</p>
                <p className="text-gray-400 mb-4">2018 - 2022</p>
                <div className="flex items-center">
                  <span className="text-gray-300 mr-4">CGPA:</span>
                  <Badge className="bg-[var(--accent-green)]/20 text-[var(--accent-green)] border-0 px-4 py-2 rounded-full font-bold text-lg">
                    8.66/10
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
