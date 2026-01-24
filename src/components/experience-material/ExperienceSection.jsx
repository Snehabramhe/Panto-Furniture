import InfoSection from "./InfoSection"
import chair5 from "../../assets/images/chair-5.png"

export default function ExperienceSection() {
  return (
    <InfoSection
      tag="Experiences"
      title="We Provide You The Best Experience"
      description="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
      reverse
      imageLayout={
        <div className="relative">
            <img
            src={chair5}
            className="realtive items-start w-full object-cover rounded-3xl lg:-ml-4"
          />
          
        </div>
      }
    />
  )
}
