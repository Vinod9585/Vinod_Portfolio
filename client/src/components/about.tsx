import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--dark-slate)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-blue)]">Who am I exactly?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a Data Analyst with hands-on experience in <span className="bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">data processing</span>, <span className="bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">visualization</span>, and <span className="bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">automation</span>. 
              Proficient in Python, SQL, and Power BI, with a strong foundation in database management and 
              object-oriented programming.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I excel at translating business requirements into actionable insights, optimizing query performance, 
              and improving data quality. My passion lies in data-driven decision-making and process optimization, 
              helping organizations unlock the full potential of their data.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center border-0">
                Data Processing
              </span>
              <span className="bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center border-0">
                Visualization
              </span>
              <span className="bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center border-0">
                Automation
              </span>
              <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center border-0">
                Business Intelligence
              </span>
            </div>
          </div>
          <div className="bg-[var(--dark-navy)] p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-6 text-[var(--accent-green)]">Core Competencies</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-[var(--dark-slate)] rounded-lg">
                <div className="text-2xl font-bold text-[var(--accent-blue)] mb-2">Python</div>
                <div className="text-sm text-gray-400">Data Science</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-[var(--dark-slate)] rounded-lg">
                <div className="text-2xl font-bold text-[var(--accent-green)] mb-2">SQL</div>
                <div className="text-sm text-gray-400">Database</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-[var(--dark-slate)] rounded-lg">
                <div className="text-2xl font-bold text-[var(--accent-orange)] mb-2">Power BI</div>
                <div className="text-sm text-gray-400">Visualization</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-[var(--dark-slate)] rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">Excel</div>
                <div className="text-sm text-gray-400">Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
