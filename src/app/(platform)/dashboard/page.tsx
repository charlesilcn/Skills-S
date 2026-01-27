'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/shared/Layout';

// Mock data for user dashboard
const mockDashboardData = {
  credits: 150,
  purchasedSkills: [
    {
      id: 1,
      title: 'Code Generator',
      description: 'Generate clean, optimized code in multiple languages from natural language prompts.',
      price: 20,
      author: 'AI Developer',
      purchasedAt: '2026-01-25',
      tags: ['Programming', 'Code', 'Developer'],
    },
    {
      id: 3,
      title: 'Image Generator',
      description: 'Generate high-quality images from text descriptions using advanced AI models.',
      price: 25,
      author: 'AI Artist',
      purchasedAt: '2026-01-24',
      tags: ['Images', 'Art', 'Design'],
    },
  ],
  recentTransactions: [
    {
      id: 1,
      type: 'purchase',
      skill: 'Code Generator',
      amount: -20,
      date: '2026-01-25',
    },
    {
      id: 2,
      type: 'credit_add',
      skill: 'Credit Purchase',
      amount: 100,
      date: '2026-01-23',
    },
    {
      id: 3,
      type: 'purchase',
      skill: 'Image Generator',
      amount: -25,
      date: '2026-01-24',
    },
  ],
};

const DashboardPage = () => {
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
              Your Dashboard
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your AI skills, credits, and transactions.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Credits Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Available Credits</h3>
                  <div className="text-3xl font-bold text-white">{mockDashboardData.credits}</div>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-400 text-xl">💰</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                Add Credits
              </Button>
            </div>

            {/* Purchased Skills Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Purchased Skills</h3>
                  <div className="text-3xl font-bold text-white">{mockDashboardData.purchasedSkills.length}</div>
                </div>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-400 text-xl">📚</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                View All Skills
              </Button>
            </div>

            {/* Transactions Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Recent Transactions</h3>
                  <div className="text-3xl font-bold text-white">{mockDashboardData.recentTransactions.length}</div>
                </div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 text-xl">📊</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                View All Transactions
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Purchased Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Purchased Skills
            </h2>
            <Button variant="ghost" className="text-white hover:text-indigo-400">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockDashboardData.purchasedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-800 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
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
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Author and Purchase Date */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="text-xs font-medium">{skill.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{skill.author}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Purchased: {skill.purchasedAt}
                  </div>
                </div>

                {/* Price and Action Button */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-white">
                    {skill.price} <span className="text-sm text-gray-400">Credits</span>
                  </div>
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                    Use Skill
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Transactions Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Recent Transactions
            </h2>
            <Button variant="ghost" className="text-white hover:text-indigo-400">
              View All
            </Button>
          </div>

          <div className="bg-slate-800 rounded-xl overflow-hidden border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">Type</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">Skill</th>
                  <th className="text-right p-4 text-gray-400 text-sm font-medium">Amount</th>
                  <th className="text-right p-4 text-gray-400 text-sm font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockDashboardData.recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-white/10 hover:bg-slate-700/50 transition-colors">
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.type === 'purchase' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}
                      >
                        {transaction.type === 'purchase' ? 'Purchase' : 'Credit Add'}
                      </span>
                    </td>
                    <td className="p-4 text-white">{transaction.skill}</td>
                    <td className={`p-4 text-right font-medium ${transaction.amount < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount)} Credits
                    </td>
                    <td className="p-4 text-right text-gray-500">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DashboardPage;