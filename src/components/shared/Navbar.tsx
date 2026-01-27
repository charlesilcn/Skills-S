'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
          >
            <span className="text-white font-bold text-xl">AI</span>
          </motion.div>
          <span className="text-xl font-bold text-white">Skills Shop</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/marketplace"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/studio"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Creator Studio
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          <Link href="/sign-in">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;