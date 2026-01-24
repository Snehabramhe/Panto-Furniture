import { Button } from "@/components/ui/button";
import chair6 from "../../assets/images/chair-6.png";
import chair7 from "../../assets/images/chair-7.png";
import chair8 from "../../assets/images/chair-8.png";
import InfoSection from "./InfoSection";

export default function MaterialsSection() {
  const images = [
    {
      src: chair6,
    },
    {
      src: chair7,
    },
    {
      src: chair8,
    },
  ];

  return (
    <InfoSection
      tag="Materials"
      title="Very Serious Materials For Making Furniture"
      description="Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price"
      imageLayout={
        <div className="relative">
          <div className="flex justify-end gap-4">
            {/* LEFT STACK */}
            <div className="flex items-start flex-col lg:gap-4 gap-4 w-[30%]">
              <img src={images[0].src} className="rounded-md h-[30%] w-full" />
              <img src={images[1].src} className="rounded-md h-[70%] w-full" />
            </div>

            {/* RIGHT BIG IMAGE */}
            <img
              src={images[2].src}
              className="rounded-md h-[85%] w-[65%] mt-auto"
            />
          </div>
        </div>
      }
    />
  );
}
