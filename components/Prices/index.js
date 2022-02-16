import React from 'react';

const Prices = ({pricing}) => {
  return (
      <>
  {pricing.map((each,id) => (
    <>
    <h1 key={id}>{each.name}</h1>
    {each.services.map((service, id)=> <li key={id}>{service}</li>)}
    </>
  ))}
  </>
  )
};

export default Prices;
