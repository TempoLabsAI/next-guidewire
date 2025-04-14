"use client";

import { Accordion, AccordionCard } from '@jutro/components';

function Page() {
  return (
    <div className="w-screen h-screen">
      <p>Testing package</p>
      <Accordion>
        <AccordionCard title="test 1">
          <p>test 1</p>
        </AccordionCard>
        <AccordionCard title="test 2">
          <p>test 2</p>
        </AccordionCard>
        <AccordionCard title="test 3">
          <p>test 3</p>
        </AccordionCard>
      </Accordion>
    </div>
  )
}

export default Page;
