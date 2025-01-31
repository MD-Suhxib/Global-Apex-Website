"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import firstImage from "@/public/images/finished.jpg"; // Replace with actual image path
import secondImage from "@/public/images/hero.jpg"; // Replace with actual image path

interface AboutProps {
  companyName: string;
  location: string;
  description: string;
  // networkSize: number;
}

const About: React.FC<AboutProps> = ({
  companyName,
  // location,
  description,
  // networkSize,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>

        {/* Animated Paragraphs */}
        {[
          " At Global Apex, We are pioneers in the manufacturing, trading, and global distribution of premium granite from India.",
          description,
          "Our commitment to quality craftsmanship, ethical sourcing, and global excellence sets us apart. With cutting-edge technology and a vast international network, we ensure seamless delivery, customized solutions, and unmatched reliability for your granite needs.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-gray-600 text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Decorative Elements with Images */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        {/* First Image */}
        <motion.div
          className="rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={firstImage} // Replace with actual image
            alt="Granite Manufacturing"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={secondImage} // Replace with actual image
            alt="Granite Processing"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
