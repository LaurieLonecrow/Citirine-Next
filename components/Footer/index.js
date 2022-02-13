import React from 'react';
import {BsInstagram} from 'react-icons/bs'
import { Container, Content, ContentTitle, ContentCard, Maps, SocialLink, CopyRight } from './FooterStyles';
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
        <ContentCard>
          <ContentTitle>Text</ContentTitle>
          <a href="sms:18049372346"><h3>Lindsay: (804) 937-2346</h3></a>
          <a href="sms:17703558887"><h3>Madison: (770) 355-8887</h3></a>
        </ContentCard>
        <ContentCard>
        <ContentTitle>Email</ContentTitle>
          <h3><a href="mailto:welovecitrine@gmail.com">welovecitrine@gmail.com</a></h3>
        </ContentCard>
        <ContentCard>
          <ContentTitle>Address</ContentTitle>
          <Maps onClick={()=>handleMapsClick()}> 
            <h3>1062 Johnson Ferry Rd,</h3> 
            <h3>Suite 100</h3>
            <h3>Marietta, GA 30068</h3>
            </Maps>
        </ContentCard>
    </Content>
    <SocialLink href="https://www.instagram.com/citrine.hair.studio/"><BsInstagram/></SocialLink>
    <CopyRight> © 2022 Citrine Hair Studio </CopyRight>
  </Container>
  );
};

export default Footer;
