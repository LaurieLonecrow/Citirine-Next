import React from 'react';
import { Container, PriceHeader, PriceListItem } from './PricesStyles';
const Prices = ({pricing}) => {
  return (
      <Container>
  {pricing.map((each,id) => (
    <>
    <PriceHeader key={id}>{each.name}</PriceHeader>
    {each.services.map((service, id)=> <PriceListItem key={id}>{service}</PriceListItem>)}
    </>
  ))}
  </Container>
  )
};

export default Prices;
