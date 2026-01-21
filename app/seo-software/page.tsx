import HeroSoftwareSEO from './components/HeroSoftwareSEO';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import SEOServices from './components/SEOServices';
import SEOProcess from './components/SEOProcess';
import IndustriesServed from './components/IndustriesServed';
import ToolsTechnologies from './components/ToolsTechnologies';
import CaseStudies from './components/CaseStudies';
import PricingPlans from './components/PricingPlans';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSoftware from './components/TestimonialsSoftware';
import FAQSoftware from './components/FAQSoftware';
import FinalCTASoftware from './components/FinalCTASoftware';

export const metadata = {
  title: 'Software SEO Services | Data-Driven SEO for SaaS & Tech',
  description:
    'Specialized SEO services for software companies, SaaS startups, and fintech. 312% average traffic growth. Free audit.',
  keywords:
    'SEO for software, SaaS SEO, fintech SEO, software company SEO, B2B SEO, enterprise SEO',
};

export default function SoftwareSEOPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSoftwareSEO />

      {/* 2. What Makes Us Different */}
      <WhatMakesUsDifferent />

      {/* 3. SEO Services We Offer */}
      <SEOServices />

      {/* 4. Our SEO Process */}
      <SEOProcess />

      {/* 5. Industries We Serve */}
      <IndustriesServed />

      {/* 6. Tools & Technologies */}
      <ToolsTechnologies />

      {/* 7. Case Studies */}
      <CaseStudies />

      {/* 8. Pricing Plans */}
      <PricingPlans />

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Testimonials */}
      <TestimonialsSoftware />

      {/* 11. FAQ */}
      <FAQSoftware />

      {/* 12. Final CTA */}
      <FinalCTASoftware />

    </main>
  );
}
