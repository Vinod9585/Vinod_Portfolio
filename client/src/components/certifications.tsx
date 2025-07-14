import { BarChart3, Database, FileSpreadsheet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Power BI - Business Intelligence",
    subtitle: "From Beginners to Advance",
    provider: "Udemy",
    icon: BarChart3,
    iconColor: "text-[var(--accent-blue)]",
    iconBg: "bg-[var(--accent-blue)]/20",
    providerColor: "bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]",
    shadowColor: "hover:shadow-[var(--accent-blue)]/20"
  },
  {
    title: "Complete Data Analyst Bootcamp",
    subtitle: "From Basics To Advanced",
    provider: "Udemy",
    icon: Database,
    iconColor: "text-[var(--accent-green)]",
    iconBg: "bg-[var(--accent-green)]/20",
    providerColor: "bg-[var(--accent-green)]/10 text-[var(--accent-green)]",
    shadowColor: "hover:shadow-[var(--accent-green)]/20"
  },
  {
    title: "Microsoft Excel",
    subtitle: "Excel from Beginner to Advanced",
    provider: "Udemy",
    icon: FileSpreadsheet,
    iconColor: "text-[var(--accent-orange)]",
    iconBg: "bg-[var(--accent-orange)]/20",
    providerColor: "bg-[var(--accent-orange)]/10 text-[var(--accent-orange)]",
    shadowColor: "hover:shadow-[var(--accent-orange)]/20"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[var(--dark-navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-gray-400 text-lg">Professional development and continuous learning</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className={`bg-[var(--dark-slate)] p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${cert.shadowColor}`}
              >
                <div className="text-center">
                  <div className={`${cert.iconBg} p-4 rounded-xl mb-4 inline-block`}>
                    <IconComponent className={`${cert.iconColor} text-3xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-4">{cert.subtitle}</p>
                  <Badge className={`${cert.providerColor} border-0`}>
                    {cert.provider}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
