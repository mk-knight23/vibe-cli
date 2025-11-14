"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock = ({ code, className }: CodeBlockProps) => {
  const { toast } = useToast();
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({
      description: 'Copied to clipboard!',
    });
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className={cn("relative group font-code bg-muted/50 p-3 pr-12 rounded-lg border text-sm", className)}>
      <pre className="overflow-x-auto"><code>{code}</code></pre>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-1/2 -translate-y-1/2 right-2 h-8 w-8"
              onClick={copyToClipboard}
              aria-label="Copy code"
            >
              {hasCopied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CodeBlock;
