const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-600">Your Name</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">Frontend Developer & UI/UX Enthusiast</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          I build exceptional digital experiences with modern web technologies and a focus on clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
