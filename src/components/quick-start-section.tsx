"use client";

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import CodeBlock from './code-block';

const items = [
  {
    value: "item-1",
    title: "1. Install Vibe CLI",
    content: (
      <>
        <p className="mb-4">Install globally via npm (GitHub source) or one-line curl script.</p>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-sm mb-2"># Option A: npm (installs from GitHub)</p>
            <CodeBlock code="npm i -g github:mk-knight23/vibe-cli" />
          </div>
          <div>
            <p className="font-medium text-sm mb-2"># Option B: curl bootstrap</p>
            <CodeBlock code="curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash" />
          </div>
        </div>
      </>
    )
  },
  {
    value: "item-2",
    title: "2. Set OpenRouter API key",
    content: "Vibe uses your OpenRouter API key to access free and open models. Set it as an environment variable to get started."
  },
  {
    value: "item-3",
    title: "3. Launch interactive chat",
    content: "Start a new chat session to ask questions, refactor code, or generate new files."
  },
  {
    value: "item-4",
    title: "4. List & select free models",
    content: "Easily switch between different free models to find the best one for your task."
  },
  {
    value: "item-5",
    title: "5. Explore agents & automation",
    content: "Discover agentic workflows that can automate multi-step tasks like generating tests or writing documentation."
  },
];

const QuickStartSection = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const progress = (openItems.length / items.length) * 100;

    return (
        <section id="onboarding" className="py-20 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Quick start (≈2 minutes)</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Follow these numbered steps to get productive. Each panel is expandable—open all to reach 100% onboarding progress. Safe by design: privacy-first, defensive-only tasks.
                </p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <Progress value={progress} className="w-full h-2" />
                    <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
                </div>
                <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
                    {items.map(item => (
                        <AccordionItem value={item.value} key={item.value}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default QuickStartSection;
