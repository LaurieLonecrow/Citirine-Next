import React from 'react';
import { Container, Content, BioCard, BioPic, BioName, BioTagline, BioContent } from './BioStyles';

const Bio = ({bios}) => {
  return (
      <>
    <Container>
        <Content>
            {bios.map((each, id) => (
                <BioCard key={id}>
                  <BioPic src={each.pic}></BioPic>
                  <BioName>{each.name}</BioName>
                  <BioTagline>{each.tagline}</BioTagline>
                  <BioContent>{each.content}</BioContent>
                </BioCard>
            ))}
        </Content>
    </Container>
    </>
  );
};

export default Bio;
