import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonCustom,
  TextButton,
  TextDefault,
  TextTitle,
  WrapperButton,
  WrapperDescription,
  WrapperSection,
  WrapperTitle
} from './style';

export default function Fingerprint ({ title, onPress, textButton, description }) {
  return (
    <WrapperSection source={require('../../../assets/imag_background.jpg')}>
      <WrapperTitle>
        <TextTitle>{title}</TextTitle>
      </WrapperTitle>
      <WrapperButton onPress={onPress}>
        <ButtonCustom source={require('../../../assets/img_huella.png')} />
      </WrapperButton>
      <TextButton>{textButton}</TextButton>
      <WrapperDescription>
        <TextDefault>{description}</TextDefault>
      </WrapperDescription>
    </WrapperSection>
  );
}

Fingerprint.defaultProps = {
  textButton: '',
};

Fingerprint.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  textButton: PropTypes.string,
  description: PropTypes.string.isRequired,
};
