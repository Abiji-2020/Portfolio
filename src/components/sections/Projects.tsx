import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application showing current and forecasted weather data with a clean UI.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100">
                {/* Project thumbnail would go here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                  <CodeBracketIcon className="h-12 w-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    View Code
                    <CodeBracketIcon className="h-4 w-4 ml-1" />
                  </a>
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
