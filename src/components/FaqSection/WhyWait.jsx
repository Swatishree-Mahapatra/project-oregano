import React from 'react';
import styled from 'styled-components';
import { faq } from '../../../config/content';

const Wrapper = styled.div`
  background-color: #000;
  grid-column: span 2 / span 2;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2fr 2fr;
  border-radius: 8px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const GreenBg = styled.div`
  background-color: #8fa963;
  border-radius: 8px 8px 0 0;
  height: 100%;
`;

const BlackBg = styled.div`
  background-color: #000;
  border-radius: 8px 0 8px 0;
`;

const Illustration = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
`;

function WhyWait() {
  return (
    <Wrapper>
      <GreenBg />
      <BlackBg>
        <Illustration src={faq.laptop.src} alt={faq.laptop.alt} />
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti tenetur
          pariatur, recusandae asperiores odio ut voluptatibus totam quod consectetur error at!
          Beatae maiores dolores soluta, voluptatibus facere repudiandae et.
        </p> */}
      </BlackBg>
    </Wrapper>
  );
}

export default WhyWait;
