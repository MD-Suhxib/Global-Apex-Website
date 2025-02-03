"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Quarry Work",
    description: "Complete sourcing from earth",
    image: "/images/Red-Granite.jpg",
  },
  {
    id: 2,
    title: "Commercial Factory Work",
    description: "Granite cutting and detailed finishing",
    image: "/images/background.webp",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative pt-35 pb-24 bg-gray-50 bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 bg-white bg-opacity-50 p-6 rounded-lg"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
          <p className="mt-4 text-xl text-gray-600">Advanced Quarry and Factory Work</p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-lg w-full max-w-full group"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 md:h-48 lg:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:brightness-50"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Watch Video</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
