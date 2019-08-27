import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  WrapperComponent,
  MainWrapperIcon,
  TextDefault,
  TextTitle,
  WrapperCamera,
  WrapperDescription,
  WrapperIconCamera,
  WrapperImage,
  WrapperImageCamera,
  WrapperTitle
} from './style';
import { RNCamera } from "react-native-camera";

export default class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
      visibility: false,
      faceDetected: false,
    };
    this.camera = React.createRef();
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);
      this.camera.pausePreview();
      this.setState({ visibility: false, filePath: data.uri });
      console.log('RESPUESTA', data);
    }
  };

  showCamera = () => {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility })
  };

  handleFaceDetected = () => {
    this.setState({ faceDetected: true });
  };

  handleErrorFaceDetected = () => {
    this.setState({ faceDetected: false });
  };

  render() {
    const { title, description } = this.props;
    const { visibility, faceDetected, filePath } = this.state;
    console.log('CARA DETECTADA', faceDetected);
    return (
        <>
          {visibility ? (
            <WrapperComponent source={require('../../../assets/imag_background.jpg')}>
              <RNCamera
                ref={ref => {this.camera = ref}}
                style={styles.preview}
                type={RNCamera.Constants.Type.front}
                autoFocus
                flashMode={RNCamera.Constants.FlashMode.auto}
                faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
                onFacesDetected={this.handleFaceDetected}
                onFaceDetectionError={this.handleErrorFaceDetected}
                faceDetectionModo={RNCamera.Constants.FaceDetection.Mode.accurate}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.log('barcodes', barcodes);
                }}
              />
              <WrapperIconCamera onPress={this.takePicture.bind(this)}>
                <WrapperImageCamera source={require('../../../assets/camera-icon.png')}/>
              </WrapperIconCamera>
              <WrapperDescription>
                <TextDefault>{description}</TextDefault>
              </WrapperDescription>
            </WrapperComponent>
          ): (
            <WrapperCamera source={require('../../../assets/imag_background.jpg')}>
              <WrapperTitle>
                <TextTitle>{title}</TextTitle>
              </WrapperTitle>
              <MainWrapperIcon onPress={this.showCamera}>
                <WrapperImage source={filePath ? { uri: filePath }: require('../../../assets/camera-icon.png')}/>
              </MainWrapperIcon>
              <WrapperDescription>
                <TextDefault>{description}</TextDefault>
              </WrapperDescription>
            </WrapperCamera>
          )}
        </>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});

FaceRecognition.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

