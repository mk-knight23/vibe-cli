import Link from "next/link";
import { Button } from "../ui/button";
import CodeBlock from "../code-block";

/**
 * HeroSection
 * Extracted from original landing page (src/app/page.tsx lines 44-62 before modularization).
 * Responsibilities:
 * - Primary headline and tagline
 * - Quick start CTA button linking to onboarding section
 * - Install command copy block
 * - Curl alternative install hint
 *
 * Keeping this component lean (no network / heavy client logic).
 */
export default function HeroSection() {
  return (
    <section className="py-20 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
        Vibe: Your Free AI Coding CLI
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Agentic Workflows in Terminal. Terminal-first assistant for developers. Anonymous by design,
        routes to free/open models via OpenRouter. Integrates with your editor and Git.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#onboarding">Quick Start</Link>
        </Button>
        <div className="w-full sm:w-auto">
          <CodeBlock code="npm i -g github:mk-knight23/vibe-cli" className="text-left" />
        </div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Or use curl:{" "}
        <code className="font-code">
          curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash
        </code>
      </p>
    </section>
  );
}