"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/hero.jpg" // Update the path if necessary
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.5)",
        }}
      />
      

      {/* Content */}
      <div className="relative z-10 text-white ;text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover.
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Craft.
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Deliver.
          </motion.h1>
          <motion.p
            className="mt-8 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            From Quarry to Perfection
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

