import React from 'react';
import { Award, BookOpen, Code, Brain } from 'lucide-react';

const About = () => {
  const certifications = [
    {
      title: "Agile Product Manager Certification",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "UX/UI Certification",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "API Development/Integration Certification",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "SQL Certification",
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-300">
            Results-driven Product Manager with a passion for creating innovative, customer-centric solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="text-gray-700 mb-6">
                Hi, I'm Andy Bittar, a results-driven Product Manager with a passion for creating innovative, 
                customer-centric solutions. With a strong foundation in B2B SaaS, AI-driven technologies, 
                and e-commerce, I've had the privilege of leading high-impact projects that deliver 
                measurable results—like developing an AI-powered feature that improved revenue efficiency by 15%.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, I've worked with cross-functional teams to manage the full product lifecycle, 
                from ideation to launch. My experience spans industries such as logistics, healthcare, and 
                financial services, where I've successfully delivered solutions that improve operational 
                efficiency, enhance user experience, and drive business growth.
              </p>
              <p className="text-gray-700 mb-6">
                I thrive on data-driven decision-making and use tools like Jira, Figma, and Amplitude to 
                prioritize backlogs, streamline workflows, and align product vision with strategic goals. 
                My approach is rooted in Agile methodologies, ensuring flexibility and adaptability in 
                fast-paced environments.
              </p>
              <p className="text-gray-700">
                When I'm not refining product strategies, I enjoy exploring the latest trends in AI/ML and 
                e-commerce technologies. I'm also passionate about mentoring teams and fostering collaboration 
                across departments to unlock innovation and achieve shared goals.
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
              
              {/* Education */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                </div>
                <div className="ml-9">
                  <p className="text-gray-700 font-medium">Bachelor's Degree in Computer System Management</p>
                  <p className="text-gray-600">Metropolitan State University</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
                </div>
                <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                      <div className="text-teal-600">
                        {cert.icon}
                      </div>
                      <span className="text-gray-700">{cert.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 font-medium italic">
                "I'm excited to continue building products that solve real-world problems and create 
                meaningful user experiences. Let's build the future—one innovative product at a time."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;