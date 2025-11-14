"use client"
import React, { useState, useEffect } from 'react';
import { Code, Zap, Palette, Database, Mail, Github, Linkedin, ExternalLink, Menu, X, ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Next.js', icon: Code, gradient: 'from-slate-900 to-slate-700', description: 'SSR & Static Site Generation' },
    { name: 'React.js', icon: Zap, gradient: 'from-blue-600 to-cyan-500', description: 'Modern UI Components' },
    { name: 'Angular', icon: Code, gradient: 'from-red-600 to-pink-500', description: 'Enterprise Applications' },
    { name: 'TailwindCSS', icon: Palette, gradient: 'from-cyan-500 to-blue-500', description: 'Utility-First Styling' },
    { name: 'Bootstrap', icon: Palette, gradient: 'from-purple-600 to-pink-500', description: 'Responsive Layouts' },
    { name: 'Firebase', icon: Database, gradient: 'from-orange-500 to-yellow-500', description: 'Backend & Authentication' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      tech: 'Next.js, TailwindCSS, Firebase',
      description: 'Full-featured online store with payment integration, real-time inventory, and admin dashboard.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Management App',
      tech: 'React.js, Bootstrap, Firebase',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Corporate Dashboard',
      tech: 'Angular, TailwindCSS, Firebase',
      description: 'Enterprise analytics dashboard with data visualization and reporting capabilities.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Social Media Platform',
      tech: 'Next.js, React.js, Firebase',
      description: 'Social networking application with user profiles, posts, comments, and real-time chat.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[50%] translate-x-[-50%] w-96 h-96 bg-purple-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                DevMaster
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 relative group ${
                    activeSection === section ? 'text-purple-400' : 'text-slate-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-slate-300 hover:text-purple-400 transition py-2"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Star size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Available for Freelance Work</span>
              <Star size={16} className="text-cyan-400" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Full Stack
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful, scalable web applications with 
              <span className="text-purple-400 font-semibold"> Next.js</span>,
              <span className="text-cyan-400 font-semibold"> React</span>, and
              <span className="text-pink-400 font-semibold"> Firebase</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-slate-800/50 backdrop-blur-sm text-white font-bold text-lg border-2 border-slate-700 hover:border-purple-500 hover:bg-slate-800 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-slate-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">5★</div>
                <div className="text-slate-400 text-sm">Fiverr Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-4">
              TECH STACK
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Technologies I Master
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks to build exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{skill.name}</h3>
                <p className="text-slate-400 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real-world applications showcasing innovation and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                      <ExternalLink className="text-slate-400 group-hover:text-white transition-colors" size={20} />
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                  <button className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group/btn">
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Have a project in mind? Let's make it happen!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
              <p className="text-slate-400 text-sm">your.email@example.com</p>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">GitHub</h3>
              <p className="text-slate-400 text-sm">@yourusername</p>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">LinkedIn</h3>
              <p className="text-slate-400 text-sm">@yourusername</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DevMaster
            </span>
          </div>
          <p className="text-slate-500">
            © 2024 Full Stack Developer. Crafted with passion using React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}