'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/shared/Layout';

// Mock data for AI skills
const mockSkills = [
  {
    id: 1,
    title: 'Code Generator',
    description: 'Generate clean, optimized code in multiple languages from natural language prompts.',
    price: 20,
    author: 'AI Developer',
    rating: 4.8,
    reviews: 156,
    tags: ['Programming', 'Code', 'Developer'],
  },
  {
    id: 2,
    title: 'Content Writer',
    description: 'Create engaging content for blogs, social media, and marketing materials.',
    price: 15,
    author: 'Content Creator',
    rating: 4.7,
    reviews: 203,
    tags: ['Writing', 'Content', 'Marketing'],
  },
  {
    id: 3,
    title: 'Image Generator',
    description: 'Generate high-quality images from text descriptions using advanced AI models.',
    price: 25,
    author: 'AI Artist',
    rating: 4.9,
    reviews: 187,
    tags: ['Images', 'Art', 'Design'],
  },
  {
    id: 4,
    title: 'Data Analyst',
    description: 'Analyze data and generate insightful reports with visualizations.',
    price: 30,
    author: 'Data Scientist',
    rating: 4.6,
    reviews: 132,
    tags: ['Data', 'Analysis', 'Business'],
  },
  {
    id: 5,
    title: 'Translation Tool',
    description: 'Translate text between multiple languages with high accuracy.',
    price: 10,
    author: 'Language Expert',
    rating: 4.5,
    reviews: 98,
    tags: ['Translation', 'Language', 'Communication'],
  },
  {
    id: 6,
    title: 'Chatbot Builder',
    description: 'Build custom chatbots for customer support and engagement.',
    price: 35,
    author: 'AI Solutions',
    rating: 4.8,
    reviews: 175,
    tags: ['Chatbot', 'AI', 'Customer Support'],
  },
];

// Mock data for open source skills (ranked)
const openSourceSkills = [
  {
    id: 101,
    title: 'Git Assistant',
    description: 'Automate Git operations and generate commit messages from code changes.',
    author: 'Open Source Contributors',
    stars: 1200,
    forks: 250,
    lastUpdated: '2026-01-25',
    tags: ['Git', 'Version Control', 'Developer'],
  },
  {
    id: 102,
    title: 'Markdown Generator',
    description: 'Convert natural language to well-formatted Markdown documents.',
    author: 'Open Source Community',
    stars: 950,
    forks: 180,
    lastUpdated: '2026-01-24',
    tags: ['Markdown', 'Writing', 'Documentation'],
  },
  {
    id: 103,
    title: 'JSON Validator',
    description: 'Validate and format JSON data with detailed error messages.',
    author: 'Open Source Developers',
    stars: 820,
    forks: 150,
    lastUpdated: '2026-01-23',
    tags: ['JSON', 'Validation', 'Data'],
  },
  {
    id: 104,
    title: 'Weather Forecast',
    description: 'Get accurate weather forecasts for any location worldwide.',
    author: 'Open Source Project',
    stars: 780,
    forks: 130,
    lastUpdated: '2026-01-22',
    tags: ['Weather', 'API', 'Utility'],
  },
  {
    id: 105,
    title: 'Password Generator',
    description: 'Create strong, secure passwords with customizable parameters.',
    author: 'Open Source Team',
    stars: 650,
    forks: 100,
    lastUpdated: '2026-01-21',
    tags: ['Security', 'Passwords', 'Utility'],
  },
  {
    id: 106,
    title: 'URL Shortener',
    description: 'Shorten long URLs and track click statistics.',
    author: 'Open Source Contributors',
    stars: 580,
    forks: 90,
    lastUpdated: '2026-01-20',
    tags: ['URL', 'Utility', 'Analytics'],
  },
];

// Sort open source skills by stars (ranked)
const rankedOpenSourceSkills = [...openSourceSkills].sort((a, b) => b.stars - a.stars);

const MarketplacePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Explore AI Skills Marketplace
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover thousands of AI skills created by top creators to boost your productivity.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800 rounded-xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search AI skills..."
                  className="bg-slate-700 border-white/10 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex gap-4">
                <select className="bg-slate-700 border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Writing</option>
                  <option>Design</option>
                  <option>Data</option>
                  <option>Translation</option>
                </select>
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Featured AI Skills
            </h2>
            <div className="text-sm text-gray-400">
              Showing {mockSkills.length} skills
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-slate-800 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Author and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                        <span className="text-xs font-medium">{skill.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{skill.author}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-white">{skill.rating}</span>
                      <span className="text-xs text-gray-500">({skill.reviews})</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {skill.price} <span className="text-sm text-gray-400">Credits</span>
                      </div>
                    </div>
                    <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Skills Ranking */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">Open Source</span> Skills Ranking
            </h2>
            <div className="text-sm text-gray-400">
              Top {rankedOpenSourceSkills.length} open source skills
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankedOpenSourceSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative bg-slate-800 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="p-6">
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-slate-700 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Author and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <span className="text-xs font-medium">{skill.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{skill.author}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-white">{skill.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">🔄</span>
                        <span className="text-sm text-white">{skill.forks}</span>
                      </div>
                    </div>
                  </div>

                  {/* Last Updated and Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Updated: {skill.lastUpdated}
                    </div>
                    <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                      Install
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create and Sell AI Skills?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our Creator Program and start earning money by selling your AI skills to thousands of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Start Creating
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketplacePage;