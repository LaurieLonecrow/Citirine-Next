import React from 'react';

const Prices = ({pricing}) => {
  return (
      <>
  {pricing.map((each,id) => (
    <>
    <h1>{each.name}</h1>
    {each.services.map(service => <li>{service}</li>)}
    </>
  ))}
  </>
  )
};

export default Prices;
