import React from 'react';
import Bio from '../../components/Bio';
import { bios } from '../../constants/constants'
const Meet = () => {
  return (
      <Bio bios={bios}/>
  );
};

export default Meet;
