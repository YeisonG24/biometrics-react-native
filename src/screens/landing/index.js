import React, { Component } from 'react';
import { Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import Biometrics from 'react-native-biometrics';
import ImagePicker from 'react-native-image-picker';
import Fingerprint from '../../components/fingerprint';
import FaceRecognition from '../../components/face-recognition';
import { MainWrapper } from './style';

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
  static navigationOptions = {
    title: 'BIOMETRICS',
    headerStyle: {
      backgroundColor: '#606060',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#f2f2f2',
      fontStyle: 'italic',
      marginLeft: '35%',
      marginRight: '30%'
    },
    headerRightContainerStyle: {
      marginRight: '2%',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
    };
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

  chooseFile = () => {
    var options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    const { filePath } = this.state;
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
          onPress={this.chooseFile}
          image={filePath}
          description="Al precionar el icono se desplegara la función de la camara que brinda react-native-image-picker"
        />
      </MainWrapper>
    );
  }
}
