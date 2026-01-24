import React from 'react'
import { Separator } from '../ui/separator'
import { FeatureSection } from './FeatureSection'

const WhyChoosingUs = () => {
  return (

 <FeatureSection
      heading={`Why\nChoosing Us`}
      features={[
        {
          title: "Luxury facilities",
          description:
            "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
          linkText: "More Info",
        },
        {
          title: "Affordable Price",
          description:
            "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
          linkText: "More Info",
        },
        {
          title: "Many Choices",
          description:
            "We provide many unique workspace choices so that you can choose the workspace to your liking.",
          linkText: "More Info",
        },
      ]}
      />

  )
}

export default WhyChoosingUs