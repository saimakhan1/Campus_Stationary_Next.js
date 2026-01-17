import About from "@/components/home/About";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import Reviews from "@/components/home/Reviews";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <main className="bg-amber-200">
      <Hero></Hero>
      <About></About>
      <PopularProducts></PopularProducts>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <Contact></Contact>
     </main>
    </div>
  );
}
