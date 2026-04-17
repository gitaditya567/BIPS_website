import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-primary text-white pt-20 pb-10">
          <div className="container">
            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex flex-col sm-flex-row items-center sm-items-start gap-5 mb-8">
                  <div className="w-20 h-20 seal-badge shrink-0">
                    <img src="/assets/logo_footer.png" alt="BIPS Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center sm-text-left mt-2">
                    <h3 className="text-2xl md-text-3xl font-bold font-serif leading-none tracking-tight text-white mb-2">
                      Bimla International
                    </h3>
                    <p className="text-sm font-sans uppercase tracking-[0.35em] font-bold text-secondary">
                      Public School
                    </p>
                  </div>
                </div>
                <p className="opacity-70 text-sm leading-relaxed mb-8 max-w-sm">
                  Rooted in tradition, powered by innovation. BIPS is committed to providing a holistic environment where every child finds their wings.
                </p>
                <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-xs font-sans tracking-widest text-white/40 uppercase">Connect with us on Social Media</div>
                </div>
                </div>
              </div>
              <div>
                <h4 className="footer-accent font-bold text-lg text-white">Quick Links</h4>
                <ul className="space-y-4 opacity-80 text-sm">
                  <li><a href="/" className="hover:text-secondary flex items-center gap-3 transition-all duration-300 hover:translate-x-2"><ChevronRight size={14} className="text-secondary" /> Home</a></li>
                  <li><a href="/about" className="hover:text-secondary flex items-center gap-3 transition-all duration-300 hover:translate-x-2"><ChevronRight size={14} className="text-secondary" /> About Us</a></li>
                  <li><a href="/gallery" className="hover:text-secondary flex items-center gap-3 transition-all duration-300 hover:translate-x-2"><ChevronRight size={14} className="text-secondary" /> Gallery</a></li>
                  <li><a href="/contact" className="hover:text-secondary flex items-center gap-3 transition-all duration-300 hover:translate-x-2"><ChevronRight size={14} className="text-secondary" /> Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-accent font-bold text-lg text-white">Contact Info</h4>
                <ul className="space-y-5 opacity-90 text-sm text-white/90">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="text-secondary" size={18} />
                    </div> 
                    <a 
                      href="https://www.google.com/maps/place/26%C2%B041'40.8%22N+80%C2%B053'01.4%22E/@26.6946586,80.881151,17z/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      Makhdoonpur Kaithi, Jaiti Khera, <br/>Lucknow, Uttar Pradesh
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="text-secondary" size={18} />
                    </div> 
                    <span>+91 93358 51877</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="text-secondary" size={18} />
                    </div> 
                    <span>b.i.publicschool@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center opacity-60 text-xs">
              <p className="mb-2 uppercase tracking-widest font-bold text-white/40">Design and Develop by Twins Cloud - 2026</p>
              <p>&copy; {new Date().getFullYear()} Bimla International Public School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
