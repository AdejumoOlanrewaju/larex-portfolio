"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Code, Zap, Palette, Database, Mail, Github, Linkedin, ExternalLink, Menu, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, RoundedBox, MeshWobbleMaterial, Torus, TorusKnot, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated DNA Helix
function DNAHelix() {
  const groupRef = useRef<any>(null);
  const spheres = 20;
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: spheres }).map((_, i) => {
        const angle = (i / spheres) * Math.PI * 4;
        const y = (i / spheres) * 4 - 2;
        const x = Math.cos(angle) * 1.5;
        const z = Math.sin(angle) * 1.5;
        
        return (
          <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere position={[x, y, z]} args={[0.1, 16, 16]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
                emissive={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

// Rotating Geometric Shapes
function GeometricShapes() {
  const torusRef = useRef<any>(null);
  const boxRef = useRef<any>(null);
  const torusKnotRef = useRef<any>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      boxRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      torusKnotRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[-2, 1, -2]}>
          <meshStandardMaterial
            color="#ec4899"
            wireframe
            transparent
            opacity={0.6}
          />
        </Torus>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <RoundedBox ref={boxRef} args={[1, 1, 1]} radius={0.1} position={[2, -1, -1]}>
          <MeshWobbleMaterial
            color="#06b6d4"
            factor={0.5}
            speed={2}
            wireframe
            transparent
            opacity={0.7}
          />
        </RoundedBox>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <TorusKnot ref={torusKnotRef} args={[0.6, 0.2, 100, 16]} position={[0, -2, -3]}>
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.5}
          />
        </TorusKnot>
      </Float>
    </group>
  );
}

// Enhanced Particle System
function EnhancedParticles() {
  const particlesRef = useRef<any>(null);
  const particleCount = 200;
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        color="#06b6d4" 
        transparent 
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 3D Avatar Component
function Avatar3D() {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <Sphere args={[0.8, 32, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.3}
          roughness={0.4}
        />
      </Sphere>
      
      {/* Body */}
      <RoundedBox args={[1.2, 1.5, 0.6]} radius={0.1} position={[0, -0.8, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.5}
          roughness={0.3}
        />
      </RoundedBox>
      
      {/* Arms */}
      <RoundedBox args={[0.3, 1.2, 0.3]} radius={0.1} position={[-0.8, -0.6, 0]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.3, 1.2, 0.3]} radius={0.1} position={[0.8, -0.6, 0]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      
      {/* Eyes */}
      <Sphere args={[0.1, 16, 16]} position={[-0.25, 0.6, 0.7]}>
        <meshStandardMaterial color="#1f2937" />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.25, 0.6, 0.7]}>
        <meshStandardMaterial color="#1f2937" />
      </Sphere>
      
      {/* Smile */}
      <Torus args={[0.3, 0.05, 16, 100, Math.PI]} position={[0, 0.3, 0.7]} rotation={[0, 0, Math.PI]}>
        <meshStandardMaterial color="#1f2937" />
      </Torus>
    </group>
  );
}

// Hero 3D Scene with Avatar
function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <color attach="background" args={['#020617']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[10, -10, -5]} intensity={0.8} color="#8b5cf6" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#ec4899" />
      
      {/* 3D Avatar */}
      <Avatar3D />
      
      {/* Geometric Shapes */}
      <GeometricShapes />
      
      {/* Particles */}
      <EnhancedParticles />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

function SkillCardMesh({ color, index }: any) {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + index;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 + index;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <RoundedBox ref={meshRef} args={[1, 1, 1]} radius={0.1}>
        <MeshWobbleMaterial
          color={color}
          factor={0.6}
          speed={1.5}
          wireframe
          transparent
          opacity={0.4}
        />
      </RoundedBox>
    </Float>
  );
}

function SkillCard3DScene({ color, index }: any) {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={0.8} color={color} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ffffff" />

      {/* ✔ Hook usage is now inside Canvas */}
      <SkillCardMesh color={color} index={index} />
    </Canvas>
  );
}


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Next.js', icon: Code, gradient: 'from-slate-900 to-slate-700', description: 'SSR & Static Site Generation', color: '#64748b' },
    { name: 'React.js', icon: Zap, gradient: 'from-blue-600 to-cyan-500', description: 'Modern UI Components', color: '#06b6d4' },
    { name: 'Angular', icon: Code, gradient: 'from-red-600 to-pink-500', description: 'Enterprise Applications', color: '#ec4899' },
    { name: 'TailwindCSS', icon: Palette, gradient: 'from-cyan-500 to-blue-500', description: 'Utility-First Styling', color: '#06b6d4' },
    { name: 'Bootstrap', icon: Palette, gradient: 'from-purple-600 to-pink-500', description: 'Responsive Layouts', color: '#a855f7' },
    { name: 'Firebase', icon: Database, gradient: 'from-orange-500 to-yellow-500', description: 'Backend & Authentication', color: '#f97316' }
  ];

  const projects = [
    {
      title: 'Telex Blog',
      tech: 'Next.js, TailwindCSS, Firebase',
      description: 'Telex Blog is a full-featured blogging website with database, custom cms and admin dashboard.',
      gradient: 'from-purple-500 to-pink-500',
      link: "https://telex-blog.vercel.app"
    },
    {
      title: 'Telex Chat',
      tech: 'Angular, Bootstrap, Firebase',
      description: 'Telex Chat Fully functional chat application in angular with so many features like Search, real time chat, authentication system, and timestamp',
      gradient: 'from-blue-500 to-cyan-500',
      link: "https://telex-chat-ng.vercel.app"
    },
    {
      title: 'Nova AI',
      tech: 'React js, TailwindCSS',
      description: 'Nova AI is a nice and modern looking landing for an ai tool. It is a nice, responsive multi page website',
      gradient: 'from-orange-500 to-red-500',
      link: "https://nova-ai.vercel.app"
    },
    {
      title: 'Social Media Platform',
      tech: 'Next.js, React.js, Firebase',
      description: 'Social networking application with user profiles, posts, comments, and real-time chat.',
      gradient: 'from-green-500 to-emerald-500',
      link: "#"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-950 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Larex_dev
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 relative group ${activeSection === section ? 'text-purple-400' : 'text-slate-300'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center observe-section">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-start hero-content z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
                <Star size={16} className="text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Available for Freelance Work</span>
                <Star size={16} className="text-cyan-400" />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Full Stack
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Developer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Transforming ideas into powerful, scalable web applications with
                <span className="text-purple-400 font-semibold"> Next.js</span>,
                <span className="text-cyan-400 font-semibold"> React</span>, and
                <span className="text-pink-400 font-semibold"> Firebase</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
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
            </div>

            <div className="img-container relative z-0">
              <Hero3DScene />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="max-w-[1440px] mx-auto">
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
                className="skill-card group relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* 3D Scene for each skill card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <SkillCard3DScene color={skill.color} index={index} />
                </div>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={28} />
                </div>
                <h3 className="relative z-10 text-2xl font-bold mb-3 text-white">{skill.name}</h3>
                <p className="relative z-10 text-slate-400 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="max-w-[1440px] mx-auto">
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
              <a 
                href={project.link}
                target='_blank'
                rel="noopener noreferrer"
                key={index}
                className="project-card group relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
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
                  <div className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group/btn">
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 observe-section">
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
              className="contact-card group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
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
              className="contact-card group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
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
              className="contact-card group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
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
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Larex_dev
            </span>
          </div>
          <p className="text-slate-500">
            © 2024 Full Stack Developer. Crafted with passion using React, Three.js & TailwindCSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .observe-section {
          opacity: 0;
        }
        
        .observe-section.animate-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .observe-section.animate-in .hero-content {
          animation: fadeInLeft 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .observe-section.animate-in .img-container {
          animation: fadeInRight 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .observe-section.animate-in .skill-card {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .observe-section.animate-in .project-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .observe-section.animate-in .contact-card {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .img-container {
          position: relative;
          height: 600px;
        }
        
        @media (max-width: 1024px) {
          .img-container {
            height: 400px;
            margin-top: 3rem;
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}