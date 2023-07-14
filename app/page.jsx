import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Placements from "@/components/Placements";
import { Inter } from "@next/font/google";
import Courses from "../components/Courses";
import CourseImportance from "@/components/Courses/CourseImportance";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import CourseStructure from "@/components/CourseStructure";
import CourseImp from "@/components/CourseStructure/CourseImp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CourseImportance />
      {/* <Video /> */}
      {/* <Brands /> */}
      <Courses />
      <CourseImp />
      <CourseStructure />
      <Placements />
      
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <AboutSectionOne /> */}
      <AboutSectionThree />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
