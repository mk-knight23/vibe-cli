import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, FileTerminal, GitMerge, ShieldCheck, Shuffle } from "lucide-react";

import CodeBlock from "@/components/code-block";
import QuickStartSection from "@/components/quick-start-section";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonialAuthorImage = PlaceHolderImages.find(p => p.id === 'testimonial-author');

const coreCliFeatures = [
  { icon: FileTerminal, title: "Terminal-first workflows", description: "Chat, refactor, test-gen, and review without leaving your shell. Claude Code–style but fully local routing." },
  { icon: ArrowRight, title: "Context injection primitives", description: "Inject diffs, globs, command output, docs, file sets, and system prompts precisely." },
  { icon: ShieldCheck, title: "Defensive-only stance", description: "Hard refusal logic for abusive security prompts; green-lit for defensive analysis and remediation." },
  { icon: GitMerge, title: "Git-native operations", description: "Smart commit messages, PR descriptions, status insights, code reviews, and release artifact assistance." },
  { icon: FileTerminal, title: "Structured file editing", description: "Multi-file diff planning with explicit confirmation before applying writes. Zero silent mutations." },
  { icon: Shuffle, title: "Multi-model free access", description: "Rotate among community free OpenRouter models: resilience if one is slow or degraded." },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          Vibe: Your Free AI Coding CLI
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Agentic Workflows in Terminal. Terminal-first assistant for developers. Anonymous by design, routes to free/open models via OpenRouter. Integrates with your editor and Git.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#onboarding">Quick Start</Link>
          </Button>
          <div className="w-full sm:w-auto">
            <CodeBlock code="npm i -g github:mk-knight23/vibe-cli" className="text-left"/>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or use curl: <code className="font-code">curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash</code>
        </p>
      </section>

      <QuickStartSection />

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

      <section id="docs" className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Explore Vibe Capabilities</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Compare perspectives: core CLI ergonomics, emerging agent automation, integration surfaces, and a neutral feature comparison snapshot.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="core-cli" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="core-cli">Core CLI</TabsTrigger>
              <TabsTrigger value="agents">Agents</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>
            <TabsContent value="core-cli" className="mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {coreCliFeatures.map(feature => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="mt-1 text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="agents" className="mt-8 text-center">
              <p className="text-muted-foreground">Agentic task automation features are under active development. Stay tuned for updates!</p>
            </TabsContent>
            <TabsContent value="integrations" className="mt-8">
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                    <div><h4 className="font-semibold">Plain terminal (bash, zsh, fish)</h4></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                    <div><h4 className="font-semibold">iTerm2/Windows Terminal</h4></div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                    <div><h4 className="font-semibold">Git/GitHub Integration</h4></div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <p className="text-muted-foreground">[PLANNED]</p>
                    <div><h4 className="font-semibold">VS Code sidebar</h4></div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <p className="text-muted-foreground">[PLANNED]</p>
                    <div><h4 className="font-semibold">JetBrains plugin</h4></div>
                  </div>
               </div>
            </TabsContent>
            <TabsContent value="comparison" className="mt-8 text-center">
              <p className="text-muted-foreground">Feature comparison matrix is being compiled.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">What developers say</h2>
        </div>
        <div className="mt-16">
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-xl italic">“I ship PRs faster without leaving my shell.”</p>
                      <div className="mt-6 flex items-center gap-4">
                        {testimonialAuthorImage && (
                          <Image
                            src={testimonialAuthorImage.imageUrl}
                            alt={testimonialAuthorImage.description}
                            data-ai-hint={testimonialAuthorImage.imageHint}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <p className="font-semibold">Lena Ortiz</p>
                          <p className="text-sm text-muted-foreground">Staff Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Pricing</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free Forever</CardTitle>
              <CardDescription><span className="text-3xl font-bold text-primary">$0</span>/mo</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[
                  "OpenRouter free models",
                  "Terminal-first workflows",
                  "Git-native tooling",
                  "Community support",
                  "Privacy-first (BYO key)",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col border-accent">
            <CardHeader>
              <CardTitle>Future Pro (Donations)</CardTitle>
              <CardDescription><span className="text-3xl font-bold text-primary">$X</span>/mo</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <ul className="space-y-3">
                {[
                  "Priority feature previews",
                  "Extended context limits",
                  "Optional support channel",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">Not enabled yet — we emphasize free access today.</p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
          <strong>Why free?</strong> Vibe routes to community free models via OpenRouter; no accounts required. Donations may fund infra & advanced features without paywalls.
        </p>
      </section>
      
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
