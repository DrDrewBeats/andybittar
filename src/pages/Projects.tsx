import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();
  const projectRef = React.useRef<{ [key: string]: HTMLDivElement | null }>({});

  const projects = [
    {
      id: 'ai-revenue',
      title: 'AI Revenue Optimization',
      description: 'Led the development of an AI-powered revenue optimization feature, leveraging customer behavior insights to enhance pricing and engagement strategies. Worked closely with data scientists, engineers, and sales teams to refine the model based on real-world business needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      technologies: ['Machine Learning', 'Python', 'CRM Integration', 'Data Analytics', 'AI Models'],
      impact: 'Increased revenue efficiency by 15% in the first quarter by optimizing pricing and engagement strategies, leading to higher customer lifetime value.',
      details: [
        'Designed and implemented ML algorithms to analyze customer purchasing patterns',
        'Built a real-time analytics dashboard for revenue and performance tracking',
        'Integrated with CRM systems to provide actionable insights for sales teams',
        'Developed automated reporting for continuous strategy adjustments'
      ],
      challenges: 'Initial data inconsistencies affected model accuracy; worked with engineering to refine data preprocessing and improve model reliability.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Platform',
      description: 'Developed and launched a healthcare management system to streamline patient scheduling and resource allocation. Led the product roadmap, collaborating with healthcare professionals, UX designers, and developers to ensure regulatory compliance and usability.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'API Integrations'],
      impact: 'Reduced patient wait times by 30% and improved resource allocation, leading to higher patient satisfaction and increased operational efficiency.',
      details: [
        'Designed an intuitive patient scheduling system, reducing manual administrative work',
        'Built a resource management dashboard for efficient staff and facility utilization',
        'Automated patient notifications to reduce missed appointments and improve engagement',
        'Developed advanced reporting tools for operational insights and compliance tracking'
      ],
      challenges: 'Addressed resistance to new scheduling workflows by conducting user training sessions and iterative UI improvements based on feedback.'
    },
    {
      id: 'ecommerce',
      title: 'B2B E-Commerce Solution',
      description: 'Led the development of a data-driven B2B e-commerce platform, enhancing customer experience through advanced search, personalization, and seamless transactions. Worked cross-functionally with sales, marketing, and engineering to align product features with business goals.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
      technologies: ['React', 'TypeScript', 'AWS', 'Data Analytics', 'Payment Integrations'],
      impact: 'Increased online sales by 25% YoY, improved customer engagement, and enhanced conversion rates through data-driven personalization.',
      details: [
        'Implemented advanced search functionality with AI-driven recommendations',
        'Developed customer behavior analytics to optimize marketing and sales strategies',
        'Built a personalized recommendation system to increase upsells and engagement',
        'Integrated multiple payment gateways to support seamless global transactions'
      ],
      challenges: 'Faced scalability issues due to high transaction volumes; optimized database queries and caching mechanisms to improve performance.'
    }
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && projectRef.current[hash]) {
      projectRef.current[hash]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Featured Projects</h1>
          <p className="text-xl text-gray-300">
            Showcasing innovative solutions in AI, healthcare, and e-commerce
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project) => (
              <div
                key={project.id}
                ref={(el) => (projectRef.current[project.id] = el)}
                id={project.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Key Features
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Challenges & Solutions
                      </h3>
                      <p className="text-gray-600">
                        {project.challenges}
                      </p>
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold">
                      <ArrowRight className="mr-2" />
                      Impact: {project.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;