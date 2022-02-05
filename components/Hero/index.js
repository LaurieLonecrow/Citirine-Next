import React from 'react';
import {HeroDiv} from './HeroStyles'

const Hero = ({image, position}) => {
  return <HeroDiv background={image} position={position}></HeroDiv>;
};

export default Hero;
