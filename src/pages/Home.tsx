import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-col items-center md:items-start gap-6 mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl bg-white flex items-center justify-center">
                  <img
                    src="/andy-profile.jpg"
                    alt="Andy Bittar"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
                  Hi, I'm Andy Bittar
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 text-center md:text-left">
                A results-driven Product Manager specializing in B2B SaaS and AI-driven solutions.
                Transforming ideas into impactful products.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  to="/projects"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                >
                  View Projects <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Product Management"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Driven Solutions',
                description: 'Leveraging artificial intelligence to create innovative product features and optimize business processes.',
                icon: '🤖'
              },
              {
                title: 'B2B SaaS',
                description: 'Developing and managing successful software-as-a-service products for business clients.',
                icon: '💼'
              },
              {
                title: 'Data-Driven Decision Making',
                description: 'Using analytics and metrics to guide product strategy and development.',
                icon: '📊'
              }
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600">
              Check out some of my recent work in AI, healthcare, and e-commerce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'ai-revenue',
                title: 'AI Revenue Optimization',
                description: 'Improved revenue efficiency by 15%',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
              },
              {
                id: 'healthcare',
                title: 'Healthcare Platform',
                description: 'Reduced patient wait times by 30%',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
              },
              {
                id: 'ecommerce',
                title: 'E-commerce Solution',
                description: 'Increased online sales by 25%',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80'
              }
            ].map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/projects#${project.id}`}
                    className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
                  >
                    Learn more <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;