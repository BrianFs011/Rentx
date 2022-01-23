import React from 'react';

import { 
          Container,
          ImageIndexs,
          ImageIndex, 
          CarImageWrapper,
          CarImage,
          Content,
          Details,
          Description,
          Brand,
          Name,
          Rent,
          Period,
          Price,
          About
        } from './styles'; 

interface Props {
  imagesUrl: string[];
}

export function ImageSlider ({imagesUrl,}:Props){
  return (
    <Container>
      <ImageIndexs>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexs>
      
      <CarImageWrapper>
        <CarImage
          source={{uri: imagesUrl[0]}}
          resizeMode='contain'
        />
      </CarImageWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About> 
          açldfkj ldkjfaç fdasdfja çdfjadsç
          ajsd çlfasldfjas fç~sfaçsdf
          adfl çsjfçls afdjçfa
        </About>

      </Content>



    </Container>
  )
}