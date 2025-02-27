import { BlogPost, Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Revenue Optimization',
    description: 'Led the development of an AI-driven feature that analyzed customer behavior patterns to optimize revenue generation strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    technologies: ['AI/ML', 'Python', 'React', 'Node.js'],
    impact: 'Improved revenue efficiency by 15% within first quarter of implementation'
  },
  {
    id: 2,
    title: 'Healthcare Management Platform',
    description: 'Developed a comprehensive healthcare product management system focusing on patient care optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    impact: 'Reduced patient wait times by 30% and improved resource allocation'
  },
  {
    id: 3,
    title: 'E-commerce Solution',
    description: 'Spearheaded the development of a B2B e-commerce platform with advanced analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'AWS', 'Analytics'],
    impact: 'Increased online sales by 25% year-over-year'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Product Management',
    excerpt: 'Exploring how artificial intelligence is reshaping the product management landscape.',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    category: 'AI'
  },
  {
    id: 2,
    title: 'Building Successful B2B SaaS Products',
    excerpt: 'Key insights and strategies for developing successful B2B SaaS solutions.',
    date: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'SaaS'
  },
  {
    id: 3,
    title: 'Data-Driven Decision Making in Product Development',
    excerpt: 'How to leverage data analytics to make better product decisions.',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    category: 'Product Management'
  }
];