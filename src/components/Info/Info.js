import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} imageAddress={infoContent.imageAddress}/>  
    <h2>{infoContent.header}</h2>
    <p>{infoContent.description}</p>
  </Container>
);

export default Info;