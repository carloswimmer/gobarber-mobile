import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 24 : 40}px;
`;

export const Header = styled.View`
  padding: 40px 24px;
  padding-top: ${Platform.OS === 'android' ? 40 : getStatusBarHeight() + 40}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const SignOutButton = styled.TouchableOpacity``;

export const UserAvatarSection = styled.View`
  width: 194px;
  margin: -64px auto 0;
  position: relative;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const UpdateAvatarButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #ff9000;
  right: 0;
  bottom: 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px 0;
`;
