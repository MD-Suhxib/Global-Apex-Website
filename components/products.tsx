"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  
  {
    id: 1,
    name: "Raw Granite Material",
    description: "From Earth to its purest form",
    image: "/images/tanb.png",
    link: "/products/raw-granite",
  },
  {
    id: 2,
    name: "Finished Granite Material",
    description: "Premium Quality, Polished to Perfection",
    image: "/images/showroom.jpg",
    link: "/products/finished-granite",
  },
  {
    id: 3,
    name: "Rough Granite Material",
    description: "Premium quality Rough Stones",
    image: "/images/Rough.jpg",
    link: "/products/rough-granite",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our premium collection of finished and raw granite materials.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link href={product.link} key={product.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition relative"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>

                {/* Click Here Button */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="mb-4 px-4 py-2 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-700">
                    Click Here
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
