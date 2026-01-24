import { Section } from "lucide-react";
import React from "react";
import { SegmentTabs } from "./SegmentTabs";
import ProductsSection from "../carousel/ProductsSection";

const BestProduct = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <h1 className="text-black text-center pt-10">Best Selling Product</h1>
      <div className="p-10 flex justify-center items-center">
        <SegmentTabs
          items={["Chair", "Beds", "Sofa", "Lamp"]}
          defaultActive={0}
          onChange={(item) => console.log(item)}
        />
      </div>
      <ProductsSection />
    </section>
  );
};

export default BestProduct;
