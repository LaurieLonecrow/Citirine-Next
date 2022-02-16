import React from 'react';
import { Container, PolicyCard, PolicyHeader, PolicyContent } from './PolicyStyles';
import { policies } from '../../constants/constants';
const Policy = () => {
  return (
  <Container>
      {policies.map((each,id) => (
        <PolicyCard key={id}>
          <PolicyHeader>{each.name}</PolicyHeader>
          <PolicyContent>{each.policy}</PolicyContent>
        </PolicyCard>
  ))}
  </Container>);
};

export default Policy;
