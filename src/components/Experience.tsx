import { Briefcase, MapPin, Calendar, Rocket, Wrench } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cyan-600 font-semibold mb-2">02 — EXPERIENCE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience in AI, Machine Learning & Software Engineering
          </h2>
          <p className="text-lg text-gray-600">
            Designing and deploying machine learning models, LLM-powered applications, and high-performance
            software solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-cyan-200"></div>

          <div className="relative pl-8 md:pl-24 pb-12">
            <div className="absolute left-0 md:left-6 top-2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow"></div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    AI/ML Trainee Intern
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-3">
                    Explorin Academy
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Roorkee, Uttarakhand, India • On-site</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>May 2025 – June 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Completed an intensive technical training program focused on algorithmic problem-solving,
                database systems, and foundational AI/ML concepts through hands-on implementation and
                real-world case simulations.
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-5 h-5 text-cyan-600" />
                  <h4 className="font-bold text-gray-900">Key Contributions & Learning Impact</h4>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Applied Data Structures & Algorithms in C++ to solve complex computational problems
                      with optimized time complexity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Designed and executed advanced SQL queries for data retrieval, aggregation, and
                      performance tuning.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Built structured mini-projects integrating backend logic, database operations, and
                      clean coding practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Improved problem-solving efficiency by applying systematic debugging and algorithm
                      optimization techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Collaborated in peer-driven technical sessions simulating real-world development
                      environments.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-cyan-600" />
                  <h4 className="font-bold text-gray-900">Technical Stack & Core Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2 ml-7">
                  {['C++', 'SQL', 'Data Structures & Algorithms', 'OOP', 'Debugging', 'Problem Solving', 'Database Design'].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
