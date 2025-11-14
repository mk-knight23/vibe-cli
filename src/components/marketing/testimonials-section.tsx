import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PlaceHolderImages } from "../../../core/placeholder-images";

/**
 * TestimonialsSection
 * Extracted from original landing page (src/app/page.tsx lines 159-196).
 * Single carousel item for now; structure supports future expansion.
 * Pure presentation (no fetching).
 */

const testimonialAuthorImage = PlaceHolderImages.find((p) => p.id === "testimonial-author");

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          What developers say
        </h2>
      </div>
      <div className="mt-16">
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-xl italic">
                      “I ship PRs faster without leaving my shell.”
                    </p>
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
  );
}