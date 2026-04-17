import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Connect to the backend
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', msg: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again later.' });
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white text-center">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md-text-5xl font-bold"
          >
            Contact Us
          </motion.h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl text-primary mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="p-4 bg-primary text-white rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-text-light">Makhdoonpur Kaithi, Jaiti Khera,<br />Sarojini Nagar, Lucknow, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-4 bg-secondary text-white rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-text-light">+91 123 456 7890<br />+91 987 654 3210</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-4 bg-accent text-primary rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-text-light">info@bips-school.com<br />admissions@bips-school.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl h-64 bg-bg-light border border-primary/10 flex items-center justify-center">
                <p className="text-text-light italic">Google Map will be embedded here</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card bg-bg-light"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {status.msg && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-2 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.type === 'success' && <CheckCircle size={20} />}
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
