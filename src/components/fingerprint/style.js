import styled from 'styled-components';

export const WrapperSection = styled.ImageBackground`
  align-items: center;
  width: 100%;
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
  background-color: #f2f2f2;
`;

export const WrapperTitle = styled.View`
  padding: 5%;
  margin-bottom: 5%;
  background-color: #888888;
  width: 100%;
`;

export const TextTitle = styled.Text`
  font-size: 24;
  text-align: center;
  color: #f2f2f2;
  font-weight: bold;
`;

export const ButtonCustom = styled.Image`
   width: 100%;
   height: 100%;
   resize-mode: cover;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #f2f2f2;
  text-align: center;
  font-weight: bold;
  margin: 2%;
`;

export const WrapperDescription = styled.View`
  padding: 5% 10% 5% 10%;
  background-color: #888888;
  margin-top: 5%;
  margin-bottom: 2%;
`;

export const TextDefault = styled.Text`
  font-size: 14px;
  color: #f2f2f2;
  text-align: center;
`;
