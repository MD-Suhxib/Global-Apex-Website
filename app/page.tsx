import Hero from "../components/hero"
import About from "@/components/about"
import Navbar from "../components/navbar"
import Products from "../components/products"
import Projects from "../components/projects"
// import Promotions from "../components/promotions"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About companyName=" At Global Apex, "
  // establishedYear={19730}
  location=" "
  description="Ever since its inception, Global Apex has played a vital role in the Indian Market for multiple types of Granite.
  Our main mission is that we are dedicated to sourcing, crafting, and delivering world-class granite solutions that enhance architectural excellence and pure quality."
  // specialization="At Global Apex, we turn natural stone into timeless masterpieces, ensuring durability, elegance, and excellence in every slab."
  />
      <Products />
      <Projects />
      {/* <Promotions /> */}
      <Contact />
      <Footer />
    </main>
  )
}

