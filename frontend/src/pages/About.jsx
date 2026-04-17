import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Award } from 'lucide-react';

const About = () => {
  const leadership = [
    { 
      name: 'Late Smt. Bimla Yadav', 
      role: 'Founder', 
      image: '/assets/founder.JPG', 
      position: 'object-top',
      tagline: 'The Visionary Soul',
      vision: 'Our foundation is built on the belief that education is the soul of a society as it passes from one generation to another. My dream was to create a space where every child finds their wings.'
    },
    { 
      name: 'Shrikrishka Yadav', 
      role: 'Director', 
      image: '/assets/director.JPG', 
      position: 'object-top',
      tagline: 'Leading with Innovation',
      vision: 'At BIPS, we focus on nurturing inquisitive minds. Our mission is to provide an environment where excellence is not a goal, but a journey. We empower students to lead with confidence and grace.'
    },
    { 
      name: 'Smt. Deepika Yadav', 
      role: 'Managing Director', 
      image: '/assets/md.jpg', 
      position: 'object-top',
      tagline: 'Building Excellence',
      vision: 'Management is about more than administration; it is about creating a community. We are dedicated to providing the best resources and a safe haven for our students to grow and flourish.'
    },
    { 
      name: 'Mrs Bhawna Verma', 
      role: 'Principal', 
      image: '/assets/principal.jpg', 
      position: 'object-top',
      tagline: 'A Path to Wisdom',
      vision: 'Education is the light that guides us. My commitment is to ensure that every student at BIPS receives a holistic education that balances academic brilliance with strong moral character.'
    },
    { 
      name: 'Mr. Omprakash', 
      role: 'Vice Principal', 
      image: '/assets/mr.omprakash.jpeg', 
      position: 'object-center',
      tagline: 'Discipline and Growth',
      vision: 'True success comes from consistency and discipline. We work tirelessly to ensure that our students are not just prepared for exams, but are prepared for life’s challenges.'
    },
    { 
      name: 'Mr. Ravi Yadav', 
      role: 'Co-ordinator', 
      image: '/assets/mr.ravi_yadav.jpeg', 
      position: 'object-center',
      tagline: 'Synergy in Learning',
      vision: 'The heart of a school lies in its coordination. We bridge the gap between curriculum and creativity, ensuring that every school activity contributes to the all-round development of our learners.'
    },
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white text-center">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md-text-5xl font-bold"
          >
            About BIPS
          </motion.h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container grid grid-cols-1 md-grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4 text-secondary">
              <History size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">Our Legacy</span>
            </div>
            <h2 className="text-3xl text-primary mb-6">Established in 2009</h2>
            <p className="text-text-light mb-4">
              BIPS was founded in 2009 with just 67 students. Today, it has grown into a premier educational institution in Lucknow, serving students from Playgroup to Class XII. 
            </p>
            <p className="text-text-light">
              Affiliated with the U.P. Board and following a CBSE pattern till Class VIII, we provide a healthy atmosphere where every child's talent is nurtured by qualified and experienced faculty.
            </p>
          </motion.div>
          <div className="relative">
             <img 
               src="/assets/gallary1.jpeg" 
               alt="BIPS School Building" 
               className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
             />
             <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-secondary/20 rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-bg-light">
        <div className="container grid grid-cols-1 md-grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card bg-white"
          >
            <div className="p-4 bg-primary-subtle rounded-2xl inline-block mb-6">
              <Eye className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-text-light">
              Institution aims at nurturing individuals with paramount values and multivalent competencies. This lofty ideal is accomplished by virtue of a dynamic curriculum that envisions wholesome all-round development.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card bg-white"
          >
            <div className="p-4 bg-secondary-subtle rounded-2xl inline-block mb-6">
              <Target className="text-secondary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="text-text-light space-y-2">
              <li className="flex gap-2"><span>•</span> First-class education with a balanced curriculum.</li>
              <li className="flex gap-2"><span>•</span> Enabling children to achieve their true potential.</li>
              <li className="flex gap-2"><span>•</span> Encouraging citizenship and responsibility.</li>
              <li className="flex gap-2"><span>•</span> Environment for personal growth and spirit.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Founder's Vision Quote */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="absolute -top-12 -left-8 text-9xl text-primary/5 font-serif select-none">"</div>
            <div className="relative z-10 text-center">
              <h3 className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-6">The Visionary Soul</h3>
              <blockquote className="text-2xl md-text-4xl font-serif text-primary italic leading-tight mb-8">
                "Our foundation is built on the belief that education is the soul of a society as it passes from one generation to another. My dream was to create a space where every child finds their wings."
              </blockquote>
              <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
              <h4 className="text-xl font-bold text-primary">— Late Smt. Bimla Yadav</h4>
              <p className="text-sm text-text-light uppercase tracking-widest font-bold mt-1">Founder, BIPS</p>
            </div>
            <div className="absolute -bottom-16 -right-8 text-9xl text-primary/5 font-serif select-none">"</div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-primary mb-4">The Visionaries</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="luxury-card text-center flex flex-col items-center h-full"
              >
                <div className="profile-circle mb-6 h-40 w-40 shrink-0">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className={`w-full h-full object-cover ${person.position || 'object-top'}`} />
                  ) : (
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                      <Award size={40} className="text-secondary opacity-30" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-primary mb-1 uppercase tracking-tight">{person.name}</h4>
                  <p className="text-[10px] font-bold text-text-light uppercase tracking-widest mb-1">{person.tagline}</p>
                  <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">{person.role}</p>
                  <div className="w-10 h-0.5 bg-primary/10 mx-auto mb-4"></div>
                  <p className="text-sm text-text-light italic leading-relaxed px-2">
                    "{person.vision}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
