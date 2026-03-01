import { GraduationCap, Code, Database, Brain, Wrench } from 'lucide-react';

const About = () => {
  const skills = {
    Languages: ['Python', 'Java', 'C++/C', 'HTML', 'CSS'],
    'Frameworks & Libraries': [
      'PyTorch',
      'FastAPI',
      'TensorFlow',
      'SciKit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Keras',
      'Flask',
      'XGBoost',
      'OpenCV',
      'pyttsx3',
    ],
    Databases: ['MySQL', 'MongoDB'],
    'AI/ML & Data': ['LLM Fine-Tuning', 'Prompt Engineering'],
    'Tools & Platforms': ['Git', 'UiPath', 'Microsoft Power Platform'],
  };

  const skillIcons: Record<string, JSX.Element> = {
    Languages: <Code className="w-6 h-6" />,
    'Frameworks & Libraries': <Brain className="w-6 h-6" />,
    Databases: <Database className="w-6 h-6" />,
    'AI/ML & Data': <Brain className="w-6 h-6" />,
    'Tools & Platforms': <Wrench className="w-6 h-6" />,
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cyan-600 font-semibold mb-2">01 — ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transforming research into real world AI solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science and Engineering student with specialization in Artificial Intelligence
              and Machine Learning at COER University, with a passion for creating intelligent, scalable
              solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My experience spans from fine-tuning Large Language Models to architecting AI-driven systems
              that scale to thousands of users. I thrive at the intersection of Artificial Intelligence and
              software engineering, where groundbreaking research transforms into impactful, real-world solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">COER University</h3>
                <p className="text-gray-700 font-medium">
                  Computer Science & Engineering With (AIML)
                </p>
                <p className="text-gray-500 mt-1">2024 - 2028</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">TECHNICAL EXPERTISE</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-600">{skillIcons[category]}</div>
                  <h4 className="font-bold text-gray-900">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
