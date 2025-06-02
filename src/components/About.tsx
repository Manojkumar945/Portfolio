const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Passionate about creating innovative mobile solutions
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am an aspiring app developer with a solid understanding of mobile technologies. I am driven to create innovative and user-centric applications that solve real-world problems and provide exceptional user experiences.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Currently pursuing my Bachelor of Technology in Information Technology at Paavai Engineering College, I've complemented my academic journey with practical experience through multiple internships where I've worked on Android development projects and web applications.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              My goal is to contribute to a dynamic development team and continuously enhance my skills in app development. I am eager to seize opportunities to grow and make a significant impact in the field of mobile application development.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg w-36">
                <span className="text-3xl font-bold text-blue-600">5+</span>
                <span className="text-gray-600 text-sm">Internships</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg w-36">
                <span className="text-3xl font-bold text-blue-600">10+</span>
                <span className="text-gray-600 text-sm">Projects</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg w-36">
                <span className="text-3xl font-bold text-blue-600">8+</span>
                <span className="text-gray-600 text-sm">Certifications</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Strengths</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800">Problem Solving</h4>
                  <p className="text-gray-600 text-sm">Strong analytical and creative problem-solving abilities</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800">Team Collaboration</h4>
                  <p className="text-gray-600 text-sm">Excellent communication and team collaboration skills</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800">Fast Learner</h4>
                  <p className="text-gray-600 text-sm">Quick to adapt and learn new technologies</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800">Attention to Detail</h4>
                  <p className="text-gray-600 text-sm">Meticulous attention to detail in development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;