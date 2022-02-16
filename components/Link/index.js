import React from 'react';
import { links } from '../../constants/constants';
import { Container, LinkCard, LinkHeader, LinkContent, LinkListItem } from './LinkStyles';

const Link = () => {
  return (
  <Container>
    {links.map((each,id) => (
        <LinkCard key={id}>
          <LinkHeader>{each.name}</LinkHeader>
          <LinkContent>{each.links.map((product, id)=>
          <>
            <LinkListItem><a key={id} href={product.link}>{product.product}</a></LinkListItem>
          </>
          )}</LinkContent>
        </LinkCard>
  ))}
  </Container>
  );
};

export default Link;
