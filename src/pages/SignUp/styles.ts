import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 24 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px 0;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #312e38;
  border-top-width: 1px;
  border-top-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const BackToSignInText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #fff;
  margin-left: 16px;
`;
