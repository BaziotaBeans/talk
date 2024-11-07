'use client';

import { MessageSquare } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import MaxWidthWrapper from './max-width-wrapper';

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      z-[999]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MaxWidthWrapper className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">TALK</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button>Começar Agora</Button>
          <ThemeToggle />
        </div>
      </MaxWidthWrapper>
    </motion.header>
  );
}
