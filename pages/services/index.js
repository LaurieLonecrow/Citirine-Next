import React from 'react';
import {Container} from '../../styles/ServicesStyles'
import { pricing } from '../../constants/constants';
import Prices from '../../components/Prices';
const Sevices = () => {
  return (
  <div>
      <Prices pricing={pricing}/>
  </div>
  );
};

export default Sevices;
