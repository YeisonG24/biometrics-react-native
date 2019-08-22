import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const WrapperSection = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperButton = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 1%;
  margin: 1%;
`;

export const TextTitle = styled.Text`
  font-size: 24;
  text-align: center;
  color: #4D4D4D;
  font-weight: bold;
  margin: 10%;
`;

export const ButtonCustom = styled.Image`
   width: 100%;
   height: 100%;
   resize-mode: cover;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: red;
  text-align: center;
  font-weight: bold;
  margin: 2%;
`;
