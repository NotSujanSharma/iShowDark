// import { redirect } from "next/navigation";

// export default function EmptyPage() {
// 	redirect("/default-channel");
// }

import React from "react";

import { Category } from "./components/Category";

import {EditorsPickSection} from "./components/EditorsPickSection";
import {FeaturedProductsSection} from "./components/FeaturedProductsSection";
import {PromiseSection} from "./components/PromiseSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { HeroSection } from "./components/HeroSection";

// import { Header } from "@/ui/components/Header";
// import { Footer } from "@/ui/components/Footer";


export default function HomePage({ channel }: { channel: string }) {
  return (
    <div>
      {/* <Header channel="default-channel"/> */}
      <HeroSection />
      <Category />
      <EditorsPickSection />
      <FeaturedProductsSection channel={channel} />
      <PromiseSection />
      <NewsletterSection /> 
      {/* <Footer channel="default-channel"/> */}
      </div>);
}
