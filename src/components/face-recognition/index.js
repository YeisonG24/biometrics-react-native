import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import {
  MainWrapper,
  MainWrapperIcon,
  WrapperImage,
  TextDefault,
  TextTitle,
  WrapperDescription,
  WrapperTitle,
  WrapperIconCamera,
  WrapperImageCamera,
  WrapperCamera,
} from "./style";

export default function FaceRecognition({ title, ref, onPress, description, showCamera, visible }) {
  return (
    <>
      {visible ? (
        <MainWrapper source={require('../../../assets/imag_background.jpg')}>
          <RNCamera
            ref={ref}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log('barcodes', barcodes);
            }}
          />
          <WrapperIconCamera onPress={onPress}>
            <WrapperImageCamera source={require('../../../assets/camera-icon.png')}/>
          </WrapperIconCamera>
          <WrapperDescription>
            <TextDefault>{description}</TextDefault>
          </WrapperDescription>
        </MainWrapper>
        ): (
        <WrapperCamera source={require('../../../assets/imag_background.jpg')}>
          <WrapperTitle>
            <TextTitle>{title}</TextTitle>
          </WrapperTitle>
          <MainWrapperIcon onPress={showCamera}>
            <WrapperImage source={require('../../../assets/camera-icon.png')}/>
          </MainWrapperIcon>
          <WrapperDescription>
            <TextDefault>{description}</TextDefault>
          </WrapperDescription>
        </WrapperCamera>
        )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


FaceRecognition.propTypes = {
  title: PropTypes.string.isRequired,
  ref: PropTypes.func.isRequired,
  showCamera: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
