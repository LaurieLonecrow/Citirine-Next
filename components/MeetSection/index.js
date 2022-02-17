import React from 'react';
import Hero from '../Hero'
import Button from '../Button';
import { Section } from '../../styles/GlobalComponents';

const MeetSection = () => {
  return (
    <Section>
        <Hero position={`top`}
              image={`https://res.cloudinary.com/lonecrow/image/upload/v1644012068/Citrine/LSA_9427_pfmsli.jpg`}/>
        <Button content={`Meet your Stylist`} 
                href={`/meet`}/>
    </Section>
  );
};

export default MeetSection;
