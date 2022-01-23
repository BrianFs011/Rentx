import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps{
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexs = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({theme, active})=>
    active ? theme.colors.text : theme.colors.shape
  };

  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  height: 132px;
  width: 280px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle:{
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme})=>theme.fonts.secondary_500};
  color: ${({theme})=>theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({theme})=>theme.fonts.secondary_500};
  color: ${({theme})=>theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme})=>theme.fonts.secondary_500};
  color: ${({theme})=>theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${({theme})=>theme.fonts.primary_400};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;

  margin-top: 23px;
`;