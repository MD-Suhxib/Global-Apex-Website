// "use client"

// import { motion } from "framer-motion"
// import { Calendar, Package, Percent } from "lucide-react"

// const promotions = [
//   {
//     id: 1,
//     title: "Season Sale",
//     description: "Get up to 20% off on selected marble collections",
//     icon: Percent,
//     validUntil: "December 31, 2024",
//   },
//   {
//     id: 2,
//     title: "Bulk Orders",
//     description: "Special pricing for bulk orders above 1000 sq ft",
//     icon: Package,
//     validUntil: "Ongoing",
//   },
//   {
//     id: 3,
//     title: "Early Bird",
//     description: "Additional 5% off for early project bookings",
//     icon: Calendar,
//     validUntil: "Limited time offer",
//   },
// ]

// export default function Promotions() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900">Special Offers</h2>
//           <p className="mt-4 text-xl text-gray-600">Exclusive deals and promotions</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {promotions.map((promo, index) => (
//             <motion.div
//               key={promo.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-lg p-8 shadow-lg"
//             >
//               <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
//                 <promo.icon className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{promo.title}</h3>
//               <p className="text-gray-600 mb-4">{promo.description}</p>
//               <p className="text-sm text-gray-500">Valid until: {promo.validUntil}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

