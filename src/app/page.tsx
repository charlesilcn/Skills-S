'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/shared/Layout";

const LandingPage = () => {
  // State for current section and scroll position
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sections data
  const sections = [
    { id: 'slogan', title: 'AI Superpowers. On Demand.' },
    { id: 'hero', title: 'Discover AI Skills That Boost Your Productivity' },
    { id: 'stats', title: 'Platform Stats' },
    { id: 'bento', title: 'Explore AI Skills' },
    { id: 'features', title: 'Why Choose AI Skills Shop' },
    { id: 'cta', title: 'Ready to Boost Your Productivity?' },
  ];

  // Particle effect component
  const ParticleEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create particles
      const particles: { x: number; y: number; size: number; speedX: number; speedY: number; color: string }[] = [];
      const particleCount = 100;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1})`, // Indigo color
        });
      }
      
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (const particle of particles) {
          // Update particle position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          
          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Connect particles with lines
          for (const otherParticle of particles) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 - distance / 500})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />
    );
  };

  // Scroll event handler for section navigation
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection(prev => prev - 1);
      }
      
      // Prevent default scroll behavior
      e.preventDefault();
      
      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 1000);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [currentSection, isScrolling]);

  return (
    <Layout>
      <div ref={containerRef} className="overflow-hidden">
        {/* Fullscreen Slogan Section */}
        <AnimatePresence mode="wait">
          {currentSection === 0 && (
            <motion.section
              key="slogan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-screen flex items-center justify-center relative"
            >
              <ParticleEffect />
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-block"
                >
                  <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">
                    AI Superpowers.
                  </h1>
                  <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 mt-4">
                    On Demand.
                  </h1>
                </motion.div>

              </div>
            </motion.section>
          )}

          {/* Hero Section */}
          {currentSection === 1 && (
            <motion.section
              key="hero"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="h-screen py-20 px-4 flex items-center"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Discover <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">AI Skills</span> That Boost Your Productivity
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Browse, purchase, and use AI skills created by top creators. Join thousands of users who are already leveraging AI to get more done.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/marketplace">
                      <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg">
                        Explore Marketplace
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                        Start Creating
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Stats Section */}
          {currentSection === 2 && (
            <motion.section
              key="stats"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="h-screen py-20 px-4 flex items-center bg-slate-900"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Platform Stats
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {[
                    { value: '1000+', label: 'AI Skills' },
                    { value: '5000+', label: 'Users' },
                    { value: '100+', label: 'Creators' },
                    { value: '$10k+', label: 'Paid to Creators' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-lg">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Bento Grid Section */}
          {currentSection === 3 && (
            <motion.section
              key="bento"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="h-screen py-20 px-4 flex items-center"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Explore AI Skills
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Large Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Browse AI Skills</h3>
                        <p className="text-gray-400 mb-6">
                          Discover thousands of AI skills created by top creators. Filter by category, price, and rating.
                        </p>
                        <Link href="/marketplace">
                          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                            Explore Marketplace
                          </Button>
                        </Link>
                      </div>
                      <div className="w-32 h-32 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-indigo-500/30 rounded-full flex items-center justify-center">
                          <span className="text-3xl text-indigo-400">🔍</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Small Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl text-emerald-400">💰</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Earn Money</h3>
                      <p className="text-gray-400 mb-4">
                        Create and sell AI skills to thousands of users.
                      </p>
                      <Link href="/studio">
                        <Button variant="ghost" className="text-white hover:text-indigo-400">
                          Start Creating
                        </Button>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Small Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl text-violet-400">🚀</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Boost Productivity</h3>
                      <p className="text-gray-400 mb-4">
                        Use AI skills to automate tasks and get more done.
                      </p>
                      <Link href="/marketplace">
                        <Button variant="ghost" className="text-white hover:text-indigo-400">
                          Explore Skills
                        </Button>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Large Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="order-2 md:order-1">
                        <div className="w-32 h-32 bg-rose-500/20 rounded-full flex items-center justify-center">
                          <div className="w-24 h-24 bg-rose-500/30 rounded-full flex items-center justify-center">
                            <span className="text-3xl text-rose-400">🎯</span>
                          </div>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold text-white mb-3">Join Creator Program</h3>
                        <p className="text-gray-400 mb-6">
                          Become a creator and earn money by selling your AI skills. Join our exclusive program for early access and support.
                        </p>
                        <Link href="/studio">
                          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                            Join Creator Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Features Section */}
          {currentSection === 4 && (
            <motion.section
              key="features"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="h-screen py-20 px-4 flex items-center bg-slate-900"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Why Choose AI Skills Shop
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We provide the best platform for buying and selling AI skills. Here's why you'll love us:
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: '🛡️', title: 'Secure Transactions', description: 'All transactions are secured with Stripe Connect. Your payments are safe and secure.' },
                    { icon: '🚀', title: 'Fast Delivery', description: 'Get instant access to your purchased skills. No waiting, no delays.' },
                    { icon: '💡', title: 'Quality Skills', description: 'All skills are reviewed by our team to ensure quality and reliability.' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      className="bg-slate-800 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <div className="w-14 h-14 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                        <span className="text-2xl text-indigo-400">{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* CTA Section */}
          {currentSection === 5 && (
            <motion.section
              key="cta"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="h-screen py-20 px-4 flex items-center"
            >
              <div className="container mx-auto max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-12 text-center"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Boost Your Productivity?
                  </h2>
                  <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Join thousands of users who are already leveraging AI skills to get more done. Start exploring today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/sign-up">
                      <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-8 text-xl">
                        Get Started for Free
                      </Button>
                    </Link>
                    <Link href="/marketplace">
                      <Button size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-10 py-8 text-xl">
                        Explore Marketplace
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default LandingPage;