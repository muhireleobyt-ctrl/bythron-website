import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/lib/data/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-base">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
