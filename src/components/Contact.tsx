import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Let's connect and discuss how we can work together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out to me for any inquiries about app development projects, collaborations, or just to say hello. I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a href="mailto:manojk46234@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    manojk46234@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <a href="tel:+917806892181" className="text-gray-700 hover:text-blue-600 transition-colors">
                    +91 7806892181
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-700">
                    Trichy, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Manojkumar945" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6 flex items-center">
                  <div className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;