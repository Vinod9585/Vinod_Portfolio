import { Badge } from "@/components/ui/badge";
import { BarChart3, Music, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Power BI Sales & Customer Analytics Dashboard",
    icon: BarChart3,
    iconColor: "text-[var(--accent-blue)]",
    shadowColor: "hover:shadow-[var(--accent-blue)]/20",
    description: "Developed an end-to-end business intelligence solution analyzing 25.2K+ orders, $24.9M revenue, and $10.5M profit across global regions with interactive executive dashboards.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    techColors: ["bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]", "bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]", "bg-[var(--accent-green)]/20 text-[var(--accent-green)]", "bg-purple-500/20 text-purple-400"],
    metrics: [
      { value: "25.2K+", label: "Orders Analyzed", color: "text-[var(--accent-blue)]" },
      { value: "$24.9M", label: "Revenue Tracked", color: "text-[var(--accent-green)]" }
    ],
    achievements: [
      "Star and snowflake data schemas",
      "20% faster report refresh performance",
      "Geospatial insights with map visuals",
      "Customer segmentation analysis"
    ]
  },
  {
    title: "Music Generation using LSTM Model",
    icon: Music,
    iconColor: "text-[var(--accent-green)]",
    shadowColor: "hover:shadow-[var(--accent-green)]/20",
    description: "Applied LSTM derived from RNN to train on over 1,000 MIDI files spanning diverse genres, creating a seamless web application for autonomous music composition.",
    technologies: ["Python", "LSTM", "PHP", "HTML", "CSS", "MySQL"],
    techColors: ["bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]", "bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]", "bg-[var(--accent-green)]/20 text-[var(--accent-green)]", "bg-purple-500/20 text-purple-400"],
    metrics: [
      { value: "88%", label: "Model Accuracy", color: "text-[var(--accent-blue)]" },
      { value: "92%", label: "User Satisfaction", color: "text-[var(--accent-green)]" }
    ],
    achievements: [
      "1,000+ MIDI files training dataset",
      "70% reduction in composition time",
      "50% increase in user adoption",
      "Coherent and harmonious sequences"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[var(--dark-slate)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Work</h2>
          <p className="text-gray-400 text-lg">Projects that showcase my data analysis expertise</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`bg-[var(--dark-navy)] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${project.shadowColor}`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`text-3xl ${project.iconColor} mr-4`} />
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => {
                      const getHighlightStyles = (techName: string) => {
                        switch(techName.toLowerCase()) {
                          case 'power bi':
                            return 'bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]';
                          case 'dax':
                            return 'bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]';
                          case 'power query':
                            return 'bg-[var(--accent-green)]/20 text-[var(--accent-green)]';
                          case 'data modeling':
                            return 'bg-purple-500/20 text-purple-400';
                          case 'python':
                            return 'bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]';
                          case 'lstm':
                            return 'bg-[var(--accent-green)]/20 text-[var(--accent-green)]';
                          case 'php':
                            return 'bg-purple-500/20 text-purple-400';
                          case 'html':
                            return 'bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]';
                          case 'css':
                            return 'bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]';
                          case 'mysql':
                            return 'bg-[var(--accent-green)]/20 text-[var(--accent-green)]';
                          default:
                            return 'bg-gray-500/20 text-gray-400';
                        }
                      };
                      
                      return (
                        <span 
                          key={tech}
                          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${getHighlightStyles(tech)} border-0`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-gray-400 text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center">
                        <CheckCircle className="text-[var(--accent-green)] mr-2" size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
