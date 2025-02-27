import React, { useState } from 'react';
import { Award, X, FileText } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
}

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "agile",
      title: "Agile PM Certification",
      description: "Professional certification in Agile Project Management methodologies",
      pdfUrl: "/Agile.pdf"
    },
    {
      id: "ux",
      title: "UX Certification",
      description: "Foundation certification in User Experience Design",
      pdfUrl: "/UX.pdf"
    },
    {
      id: "ui",
      title: "UI Certification",
      description: "Advanced certification in User Interface Design",
      pdfUrl: "/UI.pdf"
    },
    {
      id: "sql",
      title: "SQL Certification",
      description: "Professional certification in SQL and Database Management",
      pdfUrl: "/SQL.pdf"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Professional Achievements</h1>
          <p className="text-xl text-gray-300">
            Certifications and professional accomplishments in Product Management
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-50 p-3 rounded-full">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                    <p className="text-teal-600 mt-2 text-sm">Click to view certificate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedCertificate.title}</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-grow p-4">
              <iframe
                src={selectedCertificate.pdfUrl}
                className="w-full h-full"
                title={`${selectedCertificate.title} Certificate`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;