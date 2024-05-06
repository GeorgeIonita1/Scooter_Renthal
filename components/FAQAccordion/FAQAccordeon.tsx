import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";

export default function FAQAccordeon() {
    const data = [
        {
            title: 'Do i have insurance?',
            description: 'Yes, there is insurance!'
        },
        {
            title: 'Do i have equipment available?',
            description: 'Yes, we provide a helmet!'
        },
        {
            title: 'Is the scooter delivered to my location?',
            description: 'Yes, we can deliver the scootersto your location!'
        }
    ];

    return (
        <section className="container">
            <h2>Frequently Asked Questions</h2>

            <Separator className="my-8" />
            <Accordion type="single" className="lg:pl-[25%]">
                {
                    data.map((e, i) => (
                        <AccordionItem value={`item-${i}`}>
                            <AccordionTrigger className="text-left">
                                {e.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                {e.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>

        </section>
    );
}
