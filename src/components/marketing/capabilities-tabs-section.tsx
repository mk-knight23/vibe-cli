import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle2, FileTerminal, ArrowRight, ShieldCheck, GitMerge, Shuffle } from "lucide-react";

/**
 * CapabilitiesTabsSection
 * Extracted from landing page (src/app/page.tsx lines 97-157 original).
 *
 * Responsibilities:
 * - Present tabbed exploration: Core CLI / Agents / Integrations / Comparison
 * - Show mapped core CLI feature list (icon + title + description)
 * - Keep planned / placeholder content clearly marked
 *
 * Notes:
 * - Pure presentational component; no client-side data fetching
 * - Icons imported from lucide-react just like original
 */

const coreCliFeatures = [
  {
    icon: FileTerminal,
    title: "Terminal-first workflows",
    description: "Chat, refactor, test-gen, and review without leaving your shell. Claude Code–style but fully local routing.",
  },
  {
    icon: ArrowRight,
    title: "Context injection primitives",
    description: "Inject diffs, globs, command output, docs, file sets, and system prompts precisely.",
  },
  {
    icon: ShieldCheck,
    title: "Defensive-only stance",
    description: "Hard refusal logic for abusive security prompts; green-lit for defensive analysis and remediation.",
  },
  {
    icon: GitMerge,
    title: "Git-native operations",
    description: "Smart commit messages, PR descriptions, status insights, code reviews, and release artifact assistance.",
  },
  {
    icon: FileTerminal,
    title: "Structured file editing",
    description: "Multi-file diff planning with explicit confirmation before applying writes. Zero silent mutations.",
  },
  {
    icon: Shuffle,
    title: "Multi-model free access",
    description: "Rotate among community free OpenRouter models: resilience if one is slow or degraded.",
  },
];

export default function CapabilitiesTabsSection() {
  return (
    <section id="docs" className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Explore Vibe Capabilities
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Compare perspectives: core CLI ergonomics, emerging agent automation, integration surfaces, and a neutral feature
          comparison snapshot.
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
              {coreCliFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <Icon className="h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="mt-1 text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          {/* TODO: Agents tab is placeholder; implement agent orchestration & task queue */}
          <TabsContent value="agents" className="mt-8 text-center">
            <p className="text-muted-foreground">
              Agentic task automation features are under active development. Stay tuned for updates!
            </p>
          </TabsContent>
          <TabsContent value="integrations" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">Plain terminal (bash, zsh, fish)</h4>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">iTerm2/Windows Terminal</h4>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">Git/GitHub Integration</h4>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <p className="text-muted-foreground">[PLANNED]</p>
                <div>
                  <h4 className="font-semibold">VS Code sidebar</h4>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <p className="text-muted-foreground">[PLANNED]</p>
                <div>
                  <h4 className="font-semibold">JetBrains plugin</h4>
                </div>
              </div>
            </div>
          </TabsContent>
          {/* TODO: Comparison matrix placeholder; compile neutral feature matrix across tools */}
          <TabsContent value="comparison" className="mt-8 text-center">
            <p className="text-muted-foreground">Feature comparison matrix is being compiled.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}