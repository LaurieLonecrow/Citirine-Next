import React from 'react';
import Hero from '../Hero';
import { Container, Content } from './WelcomeStyles';
const Welcome = () => {
  return (
      <>
   <Container>
       <Content>
       <blockquote>The <em>citrine crystal</em> is associated with happiness, creativity, 
       and self confidence to name a few, and that is exactly what we embody at Citrine Hair Studio.
       From the moment you walk into our groovy space, we want you to feel welcomed 
       and at home. We come together, united by our passion for beauty and wellness.</blockquote>
       <blockquote>Much like crystals, we are all unique. We want to bring a personalized hair experience to each 
       guest. No matter what your hair goals may be, OUR goal at Citrine is to inspire and help 
       your light shine from the inside out.</blockquote>
       <blockquote>With love,</blockquote>
       <blockquote>Lindsay & Madison</blockquote>
       </Content>  
   </Container>
   </>
  );
};

export default Welcome;
