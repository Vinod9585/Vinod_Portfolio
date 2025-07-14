import { Building, Laptop, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Business Analyst Intern",
    company: "Sampada Industries",
    period: "Jan 2024 - Feb 2025",
    location: "Pune, India",
    icon: Building,
    iconColor: "text-[var(--accent-blue)]",
    iconBg: "bg-[var(--accent-blue)]/20",
    bulletColor: "bg-[var(--accent-blue)]",
    achievements: [
      "Analyzed sales and supply chain data using Python, SQL, Excel, and DAX identifying inefficiencies that improved process speed by 25%",
      "Automated reporting workflows, reducing manual effort by 20% and improving data accuracy by 15%",
      "Developed interactive Power BI dashboards to visualize KPIs, boosting executive reporting efficiency",
      "Recommended process improvements that contributed to a 15% increase in sales performance"
    ]
  },
  {
    title: "IT Trainee (Data Analyst)",
    company: "FIS Solutions Private Limited",
    period: "Jun 2022 - Dec 2022",
    location: "Pune, India",
    icon: Laptop,
    iconColor: "text-[var(--accent-orange)]",
    iconBg: "bg-[var(--accent-orange)]/20",
    bulletColor: "bg-[var(--accent-orange)]",
    achievements: [
      "Utilized Python for data cleaning, analysis, and automation, improving data processing efficiency by 20%",
      "Developed complex SQL queries to extract, transform, and analyze large datasets, reducing query execution time by 10%",
      "Designed dynamic Power BI dashboards to track key performance indicators, enhancing data-driven decisions",
      "Translated business requirements into actionable insights, improving reporting accuracy by 25%"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--dark-navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey in data analytics</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-blue)] to-[var(--accent-green)]"></div>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center mb-16 ${isEven ? '' : 'md:justify-end'}`}>
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.bulletColor} rounded-full border-4 border-[var(--dark-navy)]`}></div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-[var(--dark-slate)] p-8 rounded-2xl hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`${exp.iconBg} p-3 rounded-lg mr-4`}>
                        <IconComponent className={`${exp.iconColor} text-xl`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className={`${exp.iconColor} font-semibold`}>{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period} • {exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <ChevronRight className="text-[var(--accent-green)] mr-3 mt-1 text-sm flex-shrink-0" size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
