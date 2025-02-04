"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const granites = [
  { id: 1, name: "Black Granite Raw Material ", image: "/images/black Quarry.jpg" },
  { id: 2, name: "Sira Grey Raw Material", image: "/images/grey blocks.png" },
  { id: 3, name:  "Lakha Red Raw Material", image: "/images/Red-Granite.jpg" },
  { id: 4, name:  "Grey Granite Raw Material", image: "/images/grey Quarry.png" },
  { id: 5, name:  "Asian Brown Raw Material", image: "/images/AB.png" },
  { id: 6, name:  "Shivkashi Gold Raw Material", image: "/images/shivkasig.png" },
  { id: 6, name:  "Tan Brown Raw Material", image: "/images/tanb.png" },


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
          <h2 className="text-4xl font-bold text-gray-900">Granite Raw Material</h2>
          <p className="mt-4 text-xl text-gray-600">Explore our Natural Granite Raw Material</p>
        </motion.div>

        {/* Granite Grid with Two Images per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="relative w-full h-64">
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
