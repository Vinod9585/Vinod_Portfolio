import { 
  SiPython, 
  SiMysql, 
  SiGit,
  SiPandas,
  SiNumpy,
  SiAmazon,
  SiDocker
} from "react-icons/si";
import { 
  Database, 
  FileSpreadsheet, 
  Calculator, 
  RotateCcw, 
  Code,
  BarChart3,
  Server,
  TrendingUp,
  Cloud
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: SiPython,
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    hoverShadow: "hover:shadow-blue-500/20",
    description: "Data Analysis & Automation"
  },
  {
    name: "SQL",
    icon: Database,
    color: "text-orange-400",
    bgColor: "bg-orange-400/20",
    hoverShadow: "hover:shadow-orange-500/20",
    description: "Database Management"
  },
  {
    name: "Power BI",
    icon: BarChart3,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20",
    hoverShadow: "hover:shadow-yellow-500/20",
    description: "Business Intelligence"
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    color: "text-green-400",
    bgColor: "bg-green-400/20",
    hoverShadow: "hover:shadow-green-500/20",
    description: "Advanced Functions"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    hoverShadow: "hover:shadow-blue-500/20",
    description: "Database Systems"
  },
  {
    name: "SQL Server",
    icon: Server,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    hoverShadow: "hover:shadow-red-500/20",
    description: "Microsoft Database"
  },
  {
    name: "DBMS",
    icon: Database,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/20",
    hoverShadow: "hover:shadow-cyan-500/20",
    description: "Database Management"
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "text-blue-300",
    bgColor: "bg-blue-300/20",
    hoverShadow: "hover:shadow-blue-300/20",
    description: "Data Manipulation"
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "text-blue-600",
    bgColor: "bg-blue-600/20",
    hoverShadow: "hover:shadow-blue-600/20",
    description: "Numerical Computing"
  },
  {
    name: "Matplotlib",
    icon: TrendingUp,
    color: "text-orange-400",
    bgColor: "bg-orange-400/20",
    hoverShadow: "hover:shadow-orange-400/20",
    description: "Data Visualization"
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    hoverShadow: "hover:shadow-yellow-500/20",
    description: "Cloud Services"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    hoverShadow: "hover:shadow-blue-400/20",
    description: "Containerization"
  },
  {
    name: "DAX",
    icon: Calculator,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    hoverShadow: "hover:shadow-purple-500/20",
    description: "Data Analysis Expressions"
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-500",
    bgColor: "bg-orange-500/20",
    hoverShadow: "hover:shadow-orange-500/20",
    description: "Version Control"
  },
  {
    name: "Agile",
    icon: RotateCcw,
    color: "text-teal-400",
    bgColor: "bg-teal-400/20",
    hoverShadow: "hover:shadow-teal-500/20",
    description: "Methodology"
  },
  {
    name: "OOP",
    icon: Code,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/20",
    hoverShadow: "hover:shadow-indigo-500/20",
    description: "Programming Concepts"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--dark-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`bg-[var(--dark-slate)] hover:bg-slate-700 p-6 rounded-xl skill-card-hover ${skill.hoverShadow} hover:shadow-xl group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`${skill.bgColor} p-3 rounded-lg mb-4 inline-block group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-3xl ${skill.color} glow-effect`} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
