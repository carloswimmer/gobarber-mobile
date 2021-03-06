import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface TextInputProps {
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: #232129;

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    border-color: #ff9000;
  `}

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #fff;

  ${props => props.isErrored && css`
    color: #c53030;
  `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
