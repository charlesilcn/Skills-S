'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/shared/Layout';

// Mock data for creator studio
const mockStudioData = {
  totalEarnings: 520,
  activeSkills: 3,
  totalSales: 26,
  skills: [
    {
      id: 1,
      title: 'Code Generator',
      sales: 15,
      earnings: 300,
      rating: 4.8,
      status: 'published',
      updatedAt: '2026-01-25',
    },
    {
      id: 2,
      title: 'Image Generator',
      sales: 8,
      earnings: 200,
      rating: 4.9,
      status: 'published',
      updatedAt: '2026-01-24',
    },
    {
      id: 3,
      title: 'Content Writer',
      sales: 3,
      earnings: 75,
      rating: 4.5,
      status: 'reviewing',
      updatedAt: '2026-01-23',
    },
  ],
};

const StudioPage = () => {
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
              Creator Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create, manage, and earn money from your AI skills.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Total Earnings Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Total Earnings</h3>
                  <div className="text-3xl font-bold text-white">${mockStudioData.totalEarnings}</div>
                </div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 text-xl">💰</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                Request Payout
              </Button>
            </div>

            {/* Active Skills Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Active Skills</h3>
                  <div className="text-3xl font-bold text-white">{mockStudioData.activeSkills}</div>
                </div>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-400 text-xl">📚</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                Create New Skill
              </Button>
            </div>

            {/* Total Sales Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Total Sales</h3>
                  <div className="text-3xl font-bold text-white">{mockStudioData.totalSales}</div>
                </div>
                <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-violet-400 text-xl">📊</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                View Analytics
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* My Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              My Skills
            </h2>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
              Create New Skill
            </Button>
          </div>

          {/* Skills Table */}
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">Skill</th>
                  <th className="text-right p-4 text-gray-400 text-sm font-medium">Sales</th>
                  <th className="text-right p-4 text-gray-400 text-sm font-medium">Earnings</th>
                  <th className="text-center p-4 text-gray-400 text-sm font-medium">Rating</th>
                  <th className="text-center p-4 text-gray-400 text-sm font-medium">Status</th>
                  <th className="text-center p-4 text-gray-400 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockStudioData.skills.map((skill) => (
                  <motion.tr
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border-b border-white/10 hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-white">{skill.title}</div>
                        <div className="text-sm text-gray-500">Updated: {skill.updatedAt}</div>
                      </div>
                    </td>
                    <td className="p-4 text-right text-white">{skill.sales}</td>
                    <td className="p-4 text-right text-white">${skill.earnings}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white">{skill.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.status === 'published' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}
                      >
                        {skill.status.charAt(0).toUpperCase() + skill.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="ghost" className="text-white hover:text-indigo-400">
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:text-indigo-400">
                          View
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Creator Tips Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Creator Tips
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boost your sales and earnings with these tips from top creators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Optimize Your Skill Description',
                description: 'Write clear, compelling descriptions that highlight the benefits of your AI skill to potential buyers.',
              },
              {
                title: 'Add Demo Examples',
                description: 'Include real-world examples of how your skill works to build trust and show value.',
              },
              {
                title: 'Price Competitively',
                description: 'Research similar skills and price your skill competitively to attract more buyers.',
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-indigo-400 text-xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {tip.title}
                </h3>
                <p className="text-gray-400">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudioPage;