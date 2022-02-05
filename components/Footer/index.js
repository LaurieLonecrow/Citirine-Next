import React from 'react';
import { Container, Content, ContentTitle, Maps } from './FooterStyles';
const Footer = () => {

    function handleMapsClick() {
        if /* if we're on iOS, open in Apple Maps */
          ((navigator.platform.indexOf("iPhone") != -1) || 
           (navigator.platform.indexOf("iPad") != -1) || 
           (navigator.platform.indexOf("iPod") != -1))
           {
             console.log('maps')
          window.open(`maps://maps.google.com/maps?daddr=33.9751385,-84.4141128&amp;ll=`);
      } else {/* else use Google */
          window.open(`https://maps.google.com/maps?daddr=33.9751385,-84.4141128&amp;ll=`);
      }
      };
  return (
  <Container>
      <Content>
            <a href="sms:18049372346"><h1>Lindsay: (804) 937-2346</h1></a>
            <a href="sms:17703558887"><h1>Madison: (770) 355-8887</h1></a>
            <ContentTitle>Text</ContentTitle>
            <h1><a href="mailto:welovecitrine@gmail.com">welovecitrine@gmail.com</a></h1>
            <ContentTitle>Email</ContentTitle>
            <Maps onClick={()=>handleMapsClick()}> 
            <h1>1062 Johnson Ferry Rd,</h1> 
            <h1>Suite 100</h1>
            <h1>Marietta, GA 30068</h1>
            <ContentTitle>Address</ContentTitle>
            </Maps>
        <a href="https://www.instagram.com/citrine.hair.studio/">Instagram</a>
        <p> © 2021 Citrine Hair Studio </p>
      </Content>
  </Container>
  );
};

export default Footer;
