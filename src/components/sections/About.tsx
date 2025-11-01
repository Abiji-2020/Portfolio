import { CodeBracketIcon, CpuChipIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const About = () => {
 /* const _skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', items: ['Git', 'Docker', 'Figma', 'VSCode'] },
  ];*/

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer with a keen eye for design and a love for creating
              intuitive, user-friendly web applications. With experience in modern JavaScript
              frameworks and a focus on clean, maintainable code, I strive to build digital
              experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <CodeBracketIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable and efficient code following best practices.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <CpuChipIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Tech</h3>
              <p className="text-gray-600">Using the latest technologies to build fast and scalable applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <PaintBrushIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Design</h3>
              <p className="text-gray-600">Creating beautiful and intuitive user interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
