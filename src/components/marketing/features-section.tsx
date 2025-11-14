import React from "react";

/**
 * FeaturesSection
 * Extracted from landing page (src/app/page.tsx lines 66-95).
 * Presents rationale items under "Why free?" heading.
 * Keep purely presentational; no client state.
 */
export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Why free?</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Vibe is built for developer velocity with a focus on privacy and safety, all without a paywall.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">No Paywall</h3>
          <p className="mt-2 text-muted-foreground">Uses community free OpenRouter models.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Anonymous Usage</h3>
          <p className="mt-2 text-muted-foreground">Bring your own key, no accounts needed.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Defensive & Safe</h3>
          <p className="mt-2 text-muted-foreground">Agentic tasks with explicit approval steps.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Open Source</h3>
          <p className="mt-2 text-muted-foreground">Transparent roadmap and changelog.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Donation-Based Future</h3>
          <p className="mt-2 text-muted-foreground">Optional tier may extend context limits.</p>
        </div>
      </div>
    </section>
  );
}