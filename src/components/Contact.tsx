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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user starts typing
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Using Formspree for form submission - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/manojk46234@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            Let's connect and discuss how we can work together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Get in Touch</h3>
            <p className="text-slate-300 mb-10 leading-relaxed text-lg">
              Feel free to reach out to me for any inquiries about app development projects, collaborations, or just to say hello. I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "manojk46234@gmail.com", href: "mailto:manojk46234@gmail.com" },
                { icon: Phone, title: "Phone", value: "+91 7806892181", href: "tel:+917806892181" },
                { icon: MapPin, title: "Location", value: "Trichy, Tamil Nadu, India", href: null }
              ].map((contact, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <contact.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-medium text-white mb-2">{contact.title}</h4>
                    {contact.href ? (
                      <a href={contact.href} className="text-slate-300 hover:text-cyan-400 transition-colors text-lg">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-lg">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium text-white mb-6">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Manojkumar945" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-xl text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-2xl p-8 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-8 text-white">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl mb-6 flex items-center shadow-lg">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-medium">Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : null}

              {error && (
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl mb-6 flex items-center shadow-lg">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-medium">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 resize-none backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-slate-600/30">
                <p className="text-slate-400 text-sm">
                  <strong>Note:</strong> You can also reach me directly at{' '}
                  <a href="mailto:manojk46234@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    manojk46234@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+917806892181" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +91 7806892181
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;