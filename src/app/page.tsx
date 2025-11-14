import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import QuickStartSection from "../components/quick-start-section";

// Modular marketing sections (extracted for clarity)
import HeroSection from "../components/marketing/hero-section";
import FeaturesSection from "../components/marketing/features-section";
import CapabilitiesTabsSection from "../components/marketing/capabilities-tabs-section";
import TestimonialsSection from "../components/marketing/testimonials-section";
import PricingSection from "../components/marketing/pricing-section";

/**
 * Home (Landing Page)
 * Now composed entirely of modular marketing components for clarity & maintainability.
 * FAQ remains inline due to its small size; can be extracted later if it grows.
 */
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <QuickStartSection />
      <FeaturesSection />
      <CapabilitiesTabsSection />
      <TestimonialsSection />
      <PricingSection />

      <section id="faq" className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">FAQ</h2>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need a server?</AccordionTrigger>
              <AccordionContent>No. CLI Vibe runs locally in your terminal; no backend required.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it use OpenRouter?</AccordionTrigger>
              <AccordionContent>You supply your OpenRouter API key; CLI Vibe calls free/open models available via OpenRouter.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will it change my files automatically?</AccordionTrigger>
              <AccordionContent>No. It always asks for permission. You approve edits before they’re written.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Security stance?</AccordionTrigger>
              <AccordionContent>Defensive-only. Refuses requests that could be used maliciously.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
