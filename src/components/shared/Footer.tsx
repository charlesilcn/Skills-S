'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-slate-950 border-t border-white/10 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-lg font-bold text-white">Skills Shop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover and purchase AI skills to boost your productivity. Join our community of creators and buyers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-gray-400 hover:text-white transition-colors">
                  Creator Studio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 AI Skills Shop. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;