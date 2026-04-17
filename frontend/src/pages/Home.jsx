import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Bus, Monitor, Microscope, Library } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { icon: <Monitor className="text-secondary" />, title: 'Digital Classrooms', desc: 'Smart boards and interactive learning tools for modern education.' },
    { icon: <Microscope className="text-secondary" />, title: 'Science Labs', desc: 'Well-equipped laboratories for practical hands-on experience.' },
    { icon: <Library className="text-secondary" />, title: 'Rich Library', desc: 'A vast collection of books and digital resources for every student.' },
    { icon: <Bus className="text-secondary" />, title: 'Safe Transport', desc: 'Extensive transport facility covering 30KM radius.' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary"> {/* Fallback background */}
          <img 
            src="/assets/hero-bg.jpg" 
            alt="BIPS Campus and Staff" 
            className="w-full h-full object-cover img-brightness-50"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="uppercase tracking-widest text-accent font-bold mb-4 block drop-shadow-lg">Welcome to BIPS</span>
            <h1 className="text-4xl md-text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Bimla International <br />
              <span className="text-secondary drop-shadow-lg">Public School</span>
            </h1>
            <p className="text-lg mb-8 opacity-90">
              An English Medium Co-Educational School affiliated to U.P. Board. 
              Nurturing inquisitive minds and empowering students to lead with confidence and grace.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="btn btn-primary bg-secondary">Explore More</Link>
              <Link to="/contact" className="btn bg-white text-primary">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-primary mb-4">Why Choose BIPS?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ translateY: -10 }}
                className="glass-card text-center border-t-4 border-t-secondary"
              >
                <div className="mb-4 flex justify-center">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-text-light text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-serif italic mb-6">"Education is the soul of a society as it passes from one generation to another. My dream was to create a space where every child finds their wings."</h2>
            <p className="font-bold text-accent">— Late Smt. Bimla Yadav (Founder)</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-bg-light">
        <div className="container">
          <div className="glass-card bg-primary text-white p-12 rounded-3xl overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Ready to Join Our Community?</h2>
                <p className="opacity-80">Admissions are open for the academic year 2026-27.</p>
              </div>
              <Link to="/contact" className="btn bg-accent text-primary px-10 py-4 scale-110 hover:scale-115">Apply for Admission</Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-10 blur-3xl rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
