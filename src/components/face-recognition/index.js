import React from 'react';
import PropTypes from 'prop-types';
import {
  MainWrapper,
  MainWrapperIcon,
  WrapperImage,
  TextDefault,
  TextTitle,
  WrapperDescription,
  WrapperTitle
} from "./style";

export default function FaceRecognition({ title, image, onPress, description }) {
  return (
    <MainWrapper source={require('../../../assets/imag_background.jpg')}>
      <WrapperTitle>
        <TextTitle>{title}</TextTitle>
      </WrapperTitle>
      <MainWrapperIcon onPress={onPress}>
        <WrapperImage source={image ? {uri: image.uri} : require('../../../assets/camera-icon.png')} />
      </MainWrapperIcon>
      <WrapperDescription>
        <TextDefault>{description}</TextDefault>
      </WrapperDescription>
    </MainWrapper>
  )
}

FaceRecognition.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
