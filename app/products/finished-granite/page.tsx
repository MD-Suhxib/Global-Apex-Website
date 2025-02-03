"use client";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import Image from "next/image";

const granites = [
  { id: 1, name: "Black Galaxy", image: "/images/Black-Galaxy.jpg" },
  { id: 2, name: "Viscon White", image: "/images/Viscon White.jpg" },
  { id: 3, name: "Black Forest", image: "/images/Black F.jpg" },
  { id : 4, name : "Sira Grey", image:"/images/Sira-Grey.webp"},
  { id : 5, name : "Steel Grey", image:"/images/Steel G.jpg"},
  { id : 6, name : "Tan Brown", image:"/images/tan-brown.jpg"},
  { id : 7, name : "Absolute Black", image:"/images/Absolute-black.jpg"},
  { id : 9, name : "Sira Kashmir White", image:"/images/kashmir white.jpg"},
  { id : 10, name : "Sira Grey", image:"/images/Sira-Grey.jpg"},
  // Add more granite objects here
];

export default function GraniteGallery() {
  return (
    <section id="gallery" className="relative pt-12 pb-24 bg-gray-50 bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 bg-white bg-opacity-50 p-6 rounded-lg"
        >
          <h2 className="text-4xl font-bold text-gray-900">Finished Granite Material</h2>
          <p className="mt-4 text-xl text-gray-600">Explore our exclusive granite collection</p>
        </motion.div>

        {/* Granite Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {granites.map((granite) => (
            <motion.div
              key={granite.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={granite.image}
                  alt={granite.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{granite.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
