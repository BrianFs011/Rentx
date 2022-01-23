import React from 'react';
import { BackButton } from '../../components/Buttons/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { 
          Container,
          Header,
          CarImages, 
        } from './styles'; 

export function CarDetails (){
  return (
    <Container>
      <Header>
        <BackButton onPress={()=>{}}/>
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={['https://platform.cstatic-images.com/large/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png']}
          />
      </CarImages>
    </Container>
  )
}