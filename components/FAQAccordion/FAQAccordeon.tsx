import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";

export default function FAQAccordeon() {
    return (
        <section className="container">
            <h2>Frequently Asked Questions</h2>

            <Separator className="my-8" />
            <Accordion type="single" className="lg:pl-[25%]">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Do i have insurance?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, there is insurance!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Do i have equipment available?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we provide a helmet!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                        Is the scooter delivered to my location?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we can deliver the scootersto your location!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
    );
}
