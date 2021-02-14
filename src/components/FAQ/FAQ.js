import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';
import grayscale from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} imageAddress={faqContent.imageAddress} className={grayscale} />
    <h2>{faqContent.header}</h2>
    <p>{faqContent.description}</p>
  </Container>
);

export default FAQ;