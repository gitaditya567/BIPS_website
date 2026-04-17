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
                    <p className="text-text-light">+91 93358 51877</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-4 bg-accent text-primary rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-text-light">bips.kaithi@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Live Google Map */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl h-[500px] bg-bg-light border border-primary/10 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.882101379373!2d80.881151!3d26.6946586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQxJzQwLjgiTiA4MMKwNTMnMDEuNCJF!5e0!3m2!1sen!2sin!4v1713336400000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BIPS School Location"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/place/26%C2%B041'40.8%22N+80%C2%B053'01.4%22E/@26.6946586,80.881151,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary shadow-lg border border-primary/10 hover:bg-secondary hover:text-white transition-all flex items-center gap-2"
                >
                  <MapPin size={14} /> View on Google Maps
                </a>
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
