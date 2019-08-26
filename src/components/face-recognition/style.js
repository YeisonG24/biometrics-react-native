import styled from "styled-components";

export const MainWrapper = styled.ImageBackground`
  width: 100%;
  height: 650px;
  align-items: center;
`;

export const WrapperCamera = styled.ImageBackground`
  width: 100%;
  height: auto;
  align-items: center;
`;

export const MainWrapperIcon = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border-radius: 90px;
  background-color: #f2f2f2;
  align-items: center;
`;

export const WrapperImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
  resize-mode: cover;
`;

export const WrapperIconCamera = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 90px;
  background-color: #f2f2f2;
  align-items: center;
`;

export const WrapperImageCamera = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
  resize-mode: cover;
`;

export const TextDefault = styled.Text`
  font-size: 14px;
  color: #f2f2f2;
  text-align: center;
`;

export const TextTitle = styled.Text`
  font-size: 24;
  text-align: center;
  color: #f2f2f2;
  font-weight: bold;
`;

export const WrapperDescription = styled.View`
  padding: 5% 10% 5% 10%;
  background-color: #888888;
  margin-top: 5%;
  margin-bottom: 2%;
`;

export const WrapperTitle = styled.View`
  padding: 5%;
  margin-bottom: 5%;
  background-color: #3AA2DD;
  width: 100%;
`;
