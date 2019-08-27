import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import TouchID from 'react-native-touch-id';
import Biometrics from 'react-native-biometrics';
import Fingerprint from '../../components/fingerprint';
import FaceRecognition from '../../components/face-recognition';
import {
  MainWrapper,
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

const optionalConfig = {
  title: 'Autenticación Requerida',
  imageColor: '#e00606',
  imageErrorColor: '#ff0000',
  sensorDescription: 'Toque el sensor',
  sensorErrorDescription: 'Huella no reconocida',
  cancelText: 'Cancelar',
  fallbackLabel: 'Show Passcode',
  unifiedErrors: false,
  passcodeFallback: false,
};

export default class Landing extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
      visibility: false,
      faceDetected: false,
    };
    this.camera = React.createRef();
  }

  componentDidMount() {
    Biometrics.isSensorAvailable()
      .then((biometryType) => {
        if (biometryType === Biometrics.TouchID) {
          Alert.alert('Información', 'Validación por huella disponible.')
        } else if (biometryType === Biometrics.FaceID) {
          Alert.alert('Información','Validación reconocimiento facial disponible.')
        } else {
          Alert.alert('Información','Ningun elemento biometrico esta disponible.')
        }
      })
  }

  onPressHandler = async () => {
    TouchID.authenticate('Por favor ponga su huella en el sensor', optionalConfig)
      .then(success => {
        Alert.alert('Autenticación valida', 'Ingreso satisfactorio');
      })
      .catch(error => {
        Alert.alert('Auteticación invalida', 'Intentelo de nuevo');
      });
  };

  onPressTouchId = () => {
    Biometrics.createKeys('Confirme huella dactilar')
      .then((publicKey) => {
        console.log(publicKey);
        sendPublicKeyToServer(publicKey)
      });
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);
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
    this.setState({ faceDetected: 'error' });
  };

  render() {
    const { visibility, faceDetected, filePath } = this.state;
    console.log('CARA DETECTADA', faceDetected);
    return (
      <MainWrapper>
        <Fingerprint
          title="Touch ID"
          textButton="Toque la huella"
          onPress={this.onPressHandler}
          description="Al precionar la huella se hara uso de la librearia de react-native-touch-id."
        />
        <Fingerprint
          title="Touch ID"
          textButton="Toque la huella"
          onPress={this.onPressTouchId}
          description="Al precionar la huella se hara uso de la librearia de react-native-biometrics."
        />
        <FaceRecognition
          title="Face Recognition"
          description="Al precionar el icono se desplegara la función de la camara que brinda react-native-camera para el reconocimiento."
        />
      </MainWrapper>
    );
  }
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

