import { useState } from "react"
import { SegmentTabs } from "@/components/bestProduct/SegmentTabs"
import { ProductCarousel } from "./ProductCarousel"
import chair1 from "@/assets/images/chair-1.png"
import chair2 from "@/assets/images/chair-2.png"
import chair3 from "@/assets/images/chair-3.png"
import chair4 from "@/assets/images/chair-4.png"



const DATA = {
  Chair: [
    {
      id: 1,
      image: chair1,
      category: "Chair",
      title: "Sakarias Armchair",
      price: 392,
      rating: 5,
    },
    {
      id: 2,
      image: chair2,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
     {
      id: 3,
      image: chair3,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
     {
      id: 4,
      image: chair4,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
    {
      id: 5,
      image: chair4,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
    {
      id: 6,
      image: chair4,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
    
    {
      id: 7,
      image: chair4,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
    
    {
      id: 8,
      image: chair4,
      category: "Chair",
      title: "Baltsar Chair",
      price: 299,
      rating: 5,
    },
    


  ],
}

export default function ProductsSection() {
  const [active, setActive] = useState("Chair")

  return (
    <section className="container py-20 p-8 space-y-12 mx-auto">

      <ProductCarousel products={DATA[active]} />

      <div className="text-center pt-10">
        <button className="text-orange-500 font-medium">
          View All →
        </button>
      </div>
    </section>
  )
}
