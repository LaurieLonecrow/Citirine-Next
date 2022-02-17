import React from 'react';
import Link from 'next/link';
import { ButtonContainer } from './ButtonStyles';
const Button = ({content, href}) => {
  return (
  <Link href={href} passHref>
    <ButtonContainer>
        {content}
    </ButtonContainer>
  </Link>
  );
};

export default Button;
