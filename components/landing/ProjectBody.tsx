"use client"

import IntroSection from "./IntroSection";
import CategoriesSection from "./CategoriesSection";
import PromoSection from "./PromoSection";
import DealsSection from "./DealsSection";
import BrandsSection from "./BrandsSection";
import ContactSection from "./ContactSection";
export default function ProjectBody() {
  return (
    <div className="flex items-center flex-col p-4">
      <IntroSection />
      <CategoriesSection />
      <PromoSection />
      <DealsSection />
      <BrandsSection />
      <div id="contactPage">
        <ContactSection />
      </div>
    </div>
  );
}
