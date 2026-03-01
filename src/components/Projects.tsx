import { Award, Rocket, Wrench, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Clinical Breast Cancer Risk Prediction System',
      badge: 'Healthcare AI | Predictive Modeling',
      description:
        'Engineered a supervised machine learning pipeline to predict breast cancer risk using structured clinical datasets, focusing on diagnostic sensitivity, model interpretability, and reproducibility.',
      highlights: [
        'Designed and benchmarked multiple classification models including Logistic Regression, Random Forest, and Support Vector Machines to optimize predictive performance.',
        'Built an end-to-end ML pipeline covering data cleaning, normalization, feature engineering, and model evaluation.',
        'Applied cross-validation and hyperparameter tuning to improve generalization and reduce overfitting.',
        'Achieved strong accuracy and precision metrics, demonstrating reliability for early-stage diagnostic support scenarios.',
        'Implemented feature importance analysis and visualization to enhance interpretability and transparency.',
        'Structured modular code for reproducibility and experimental comparison.',
      ],
      tech: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Model Evaluation',
        'Supervised Learning',
      ],
    },
    {
      title: 'Blood Donation Website',
      badge: 'Healthcare | Frontend',
      description:
        'A frontend website designed to connect blood donors with those in need, making it easier to save lives through quick and simple interfaces.',
      highlights: [
        'Instant Signup - Be a donor or request blood in just a few clicks',
        'Nearby Centers - Find donation spots close to you',
        'Eligibility Check - Know if you are ready to donate',
        'No more waiting - Quick, simple, and made for emergencies',
        'Built with HTML + CSS + JavaScript (frontend only)',
      ],
      team: 'Team TEAM HYDRA: Muhammad Affan, Raman Kashyap, Krishna Pal Singh, Rachit Sharma, Roshan Upadhyay',
      mentor: 'Ankita Jaguri',
      tech: ['HTML', 'CSS', 'JavaScript', 'Healthcare', 'Frontend'],
    },
    {
      title: 'SMART TRAFFIC SIGN RECOGNITION ENHANCING ROAD SAFETY WITH AI',
      badge: 'Deep Learning | Computer Vision | Real-Time AI',
      description:
        'Designed and implemented an end-to-end real-time traffic sign recognition system leveraging deep learning and computer vision techniques to simulate intelligent driver-assistance functionality. Developed as part of B.Tech (AI & ML), the system integrates model inference, voice alerts, and Arduino-based hardware feedback to replicate real-world smart mobility applications.',
      highlights: [
        'Built and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras on the GTSRB dataset for multi-class traffic sign classification.',
        'Achieved high classification accuracy through optimized preprocessing, normalization, and data augmentation techniques.',
        'Implemented real-time traffic sign detection using OpenCV video stream processing.',
        'Integrated voice-based alert system using pyttsx3 to assist drivers with audible notifications.',
        'Connected Arduino hardware (LEDs & buzzer) to simulate real-time vehicle response mechanisms.',
        'Designed a complete ML workflow including preprocessing, training, evaluation, and live inference deployment.',
        'Structured the system to mimic real Advanced Driver Assistance Systems (ADAS) architecture.',
      ],
      tech: [
        'Python',
        'TensorFlow',
        'Keras',
        'OpenCV',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'CNN',
        'Image Processing',
        'Arduino',
        'Real-Time Systems',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cyan-600 font-semibold mb-2">03 — PROJECTS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Engineered AI Systems & Production-Grade Applications
          </h2>
          <p className="text-lg text-gray-600">
            A curated selection of intelligent systems and scalable software solutions built using machine
            learning, modern backend architectures, and performance-driven development practices.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  {index === 0 && (
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-cyan-600 font-semibold mb-3">{project.badge}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="w-5 h-5 text-cyan-600" />
                    <h4 className="font-bold text-gray-900">
                      {index === 0 ? 'Engineering Highlights' : 'Key Highlights'}
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-7">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.team && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-cyan-600" />
                      <h4 className="font-bold text-gray-900">Team</h4>
                    </div>
                    <p className="text-gray-700 ml-7">{project.team}</p>
                    {project.mentor && (
                      <p className="text-gray-600 ml-7 mt-1">Mentor: {project.mentor}</p>
                    )}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-cyan-600" />
                    <h4 className="font-bold text-gray-900">Technical Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-7">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
