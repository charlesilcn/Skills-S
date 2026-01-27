'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/shared/Layout';

// Subscription plans data
const plans = [
  {
    name: 'GO',
    description: 'Perfect for getting started',
    price: 9.9,
    credits: 50,
    features: [
      '50 Credits per month',
      'Basic download rights',
      'Community support',
      'Access to all free skills',
      'Standard support response time',
    ],
    popular: false,
    tier: 'go',
  },
  {
    name: 'PRO',
    description: 'For power users and small teams',
    price: 39,
    credits: 300,
    features: [
      '300 Credits per month',
      'Priority support',
      'Access to exclusive skills',
      'Advanced analytics',
      'Early access to new features',
      'Priority support response time',
    ],
    popular: true,
    tier: 'pro',
  },
  {
    name: 'ULTRA',
    description: 'Enterprise-grade features',
    price: 159,
    credits: 1500,
    features: [
      '1500 Credits per month',
      'Commercial license',
      'API access',
      'Team collaboration tools',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
    ],
    popular: false,
    tier: 'ultra',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How do credits work?',
    answer: 'Credits are the currency used on our platform to purchase AI skills. Each skill has a credit cost, and you can use your monthly credits to buy any skills you need.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Your new plan will take effect immediately, and you\'ll be billed pro-rata for the current billing cycle.',
  },
  {
    question: 'What happens if I run out of credits?',
    answer: 'If you run out of credits before the end of your billing cycle, you can purchase additional credits or upgrade your plan to get more credits.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all plans. You can cancel at any time during the trial period without being charged.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We take data security very seriously. All your data is encrypted at rest and in transit, and we comply with industry-standard security practices.',
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">Plan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect subscription plan to boost your productivity with AI skills.
            </p>
          </motion.div>

          {/* Pricing Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-slate-800 rounded-full p-2 flex">
              <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-medium">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-gray-300 font-medium hover:bg-slate-700 transition-colors">
                Annual <span className="text-emerald-400 ml-2">Save 20%</span>
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className={`bg-slate-800 rounded-xl overflow-hidden border ${plan.popular ? 'border-indigo-500 shadow-xl shadow-indigo-500/20' : 'border-white/10'} transition-all hover:border-white/20`}
              >
                {plan.popular && (
                  <div className="bg-indigo-500 text-white text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-white">
                      ${plan.price}
                      <span className="text-gray-400 text-lg">/month</span>
                    </div>
                    <div className="text-emerald-400 mt-2">{plan.credits} Credits included</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-slate-700 hover:bg-slate-600'} text-white`}>
                    Choose {plan.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare the features of our different subscription plans.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-slate-800 rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-gray-400 text-sm font-medium">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.tier} className="text-center p-6 text-gray-400 text-sm font-medium">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Monthly Credits', values: [50, 300, 1500] },
                  { name: 'Download Rights', values: ['Basic', 'Advanced', 'Unlimited'] },
                  { name: 'Priority Support', values: ['✗', '✓', '✓'] },
                  { name: 'Exclusive Skills', values: ['✗', '✓', '✓'] },
                  { name: 'API Access', values: ['✗', '✗', '✓'] },
                  { name: 'Commercial License', values: ['✗', '✗', '✓'] },
                  { name: 'Team Collaboration', values: ['✗', '✓', '✓'] },
                  { name: 'Advanced Analytics', values: ['✗', '✓', '✓'] },
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-slate-700/50 transition-colors">
                    <td className="p-6 text-white font-medium">{feature.name}</td>
                    {feature.values.map((value, i) => (
                      <td key={i} className="p-6 text-center">
                        {typeof value === 'string' && value === '✓' ? (
                          <span className="text-emerald-400">✓</span>
                        ) : typeof value === 'string' && value === '✗' ? (
                          <span className="text-gray-600">✗</span>
                        ) : (
                          <span className="text-white">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Answers to common questions about our subscription plans.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-xl">▼</span>
                  </button>
                </div>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already leveraging AI skills to get more done. Start exploring today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </Layout>
  );
};

export default PricingPage;