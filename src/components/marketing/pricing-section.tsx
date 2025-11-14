import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { CheckCircle2 } from "lucide-react";

/**
 * PricingSection
 * Extracted from original landing page (src/app/page.tsx lines 198-250).
 * Keeps two plans: Free Forever & Future Pro (donations placeholder).
 * Pure presentational; no dynamic pricing logic.
 */
export default function PricingSection() {
  const freeFeatures = [
    "OpenRouter free models",
    "Terminal-first workflows",
    "Git-native tooling",
    "Community support",
    "Privacy-first (BYO key)",
  ];

  const futureFeatures = [
    "Priority feature previews",
    "Extended context limits",
    "Optional support channel",
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Pricing
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free Forever</CardTitle>
            <CardDescription>
              <span className="text-3xl font-bold text-primary">$0</span>/mo
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {freeFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* TODO: Future Pro plan placeholder; donations model & pricing TBD */}
        <Card className="flex flex-col border-accent">
          <CardHeader>
            <CardTitle>Future Pro (Donations)</CardTitle>
            <CardDescription>
              <span className="text-3xl font-bold text-primary">$X</span>/mo {/* TODO: Replace $X with actual suggested donation tiers */}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {futureFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Not enabled yet — we emphasize free access today.
            </p>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
        <strong>Why free?</strong> Vibe routes to community free models via OpenRouter; no accounts
        required. Donations may fund infra & advanced features without paywalls.
      </p>
    </section>
  );
}