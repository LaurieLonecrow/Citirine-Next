import React from 'react';
import { products } from '../../constants/constants';
import { Section } from '../../styles/GlobalComponents';
import { ProductContainer, ProductLogo } from './ProductSectionStyles';

const ProductSection = () => {
  return (
  <Section>
      <ProductContainer>
          {products.map((each, id)=> 
                    <ProductLogo key={id} src={each}/>
          )}
      </ProductContainer>
  </Section>
  );
};

export default ProductSection;
