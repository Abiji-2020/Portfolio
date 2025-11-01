// src/components/ResumeTimeline.tsx
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: "2025 - Present",
    title: "Cloud Infrastructure Intern",
    company: "Zoho Corporation (Site24x7 Division)",
    description: "Engineered a parser for AWS CloudFormation templates and gained experience with IaC principles."
  },
  {
    year: "2024",
    title: "Software Development Intern",
    company: "Heptre TechWorks, Chennai",
    description: "Developed and deployed serverless functions with AWS Lambda and designed scalable RESTful APIs."
  },
  {
    year: "2022 - 2026",
    title: "B.E in Computer Science and Engineering",
    company: "Velammal Engineering College",
    description: "CGPA: 9.26/10"
  },
  {
    year: "2022",
    title: "HSC",
    company: "Velankanni Matriculation Higher Secondary School",
    description: "Percentage: 89.33%"
  },
  {
    year: "2020",
    title: "SSLC",
    company: "Don Bosco Matriculation Higher Secondary School",
    description: "Percentage: 90.8%"
  }
];

const ResumeTimeline = () => {
  return (
    <section id="resume" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
        
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <span className="text-sm font-semibold text-blue-600">{item.year}</span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-700 font-medium">{item.company}</p>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
            {/* Timeline dot */}
            <div className={`absolute top-6 w-6 h-6 rounded-full bg-blue-600 ${index % 2 === 0 ? 'right-[-52px]' : 'left-[-52px]'}`}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeTimeline;