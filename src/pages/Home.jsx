import React from 'react'
import Hero from '../components/hero-section/Hero'
import WhyChoosingUs from '@/components/whyChoosingUs/WhyChoosingUs'
import BestProduct from "../components/bestProduct/BestProduct"
import { SegmentTabs } from '@/components/bestProduct/SegmentTabs'
import ProductsSection from '@/components/carousel/ProductsSection'
import ExperienceSection from '@/components/experience-material/ExperienceSection'
import MaterialsSection from '@/components/experience-material/MaterialsSection'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/testimonial/TestimonialsSection'

const Home = () => {
  return (
   <>
   <Hero/>
   <WhyChoosingUs/>
   <BestProduct/>
   <ExperienceSection/>
   <MaterialsSection/>
   <TestimonialsSection/>
   </>
  )
}

export default Home