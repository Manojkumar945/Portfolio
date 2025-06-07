import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';

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
    setSubmitted(true);
    
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
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            Ready to collaborate on your next innovative project? Let's discuss how we can create something extraordinary together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Whether you're looking to build a cutting-edge mobile application or need technical consultation, I'm here to help bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                  <a href="mailto:manojk46234@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors text-lg">
                    manojk46234@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                  <a href="tel:+917806892181" className="text-slate-300 hover:text-amber-400 transition-colors text-lg">
                    +91 7806892181
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                  <p className="text-slate-300 text-lg">
                    Trichy, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-blue-600 p-4 rounded-xl text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/Manojkumar945" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-gray-700 p-4 rounded-xl text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 p-6 rounded-xl mb-6 flex items-center">
                  <CheckCircle size={24} className="mr-4 flex-shrink-0" />
                  <p className="text-lg">Your message has been sent successfully! I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-3 font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-3 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-slate-300 mb-3 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-3 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1"
                  >
                    <Send size={20} />
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