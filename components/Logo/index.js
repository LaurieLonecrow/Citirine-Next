import React from 'react';
import Link from 'next/link';
import {LogoTitle, LogoText} from './LogoStyles'
const Logo = () => {
  return (
  <Link href='/' passHref>
    <div>
      <LogoText>Citrine Hair Studio</LogoText>
    </div>
  </Link>
  );
};

export default Logo;
