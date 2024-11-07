'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
}

export const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(({ className, children, variant = 'default', ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        'relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg text-white font-medium transition-all',
        variant === 'default' &&
          'bg-primary hover:bg-primary/90 dark:text-black',
        variant === 'outline' &&
          'border-2 border-primary text-primary hover:bg-primary/10',
        variant === 'ghost' &&
          'bg-transparent text-primary hover:bg-primary/10',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0"
        style={{ mixBlendMode: 'overlay' }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {children}
    </motion.button>
  );
});
