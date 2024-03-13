import React from "react";
import { Progress } from "./ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Capabilities = () => {
  return (
    <section className="full-container flex flex-col gap-20 md:gap-28 xl:flex-row">
      <div className="full-container flex flex-col gap-20 md:gap-28 lg:py-10 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12">
          <h4 className="muli-bold-20 text-dark-2">CAPABILITIES</h4>
          <h1 className="playfair-display-semibold-70">
            We help to create Digital strategies.
          </h1>
          <div className="md:gap-y-12">
            <h4 className="space-grotesk-bold-22 text-primary">
              Website & Mobile Development
            </h4>
            <Progress value={86} />
          </div>
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Website & Mobile App Design</AccordionTrigger>
              <AccordionContent>
                We’ve created a full-stack structure for our working{" "}
                <strong>workflow processes,</strong> were from the funny the
                century initial all the made, have spare to negatives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
