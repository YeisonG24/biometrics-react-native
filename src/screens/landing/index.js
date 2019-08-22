import React, { Component } from 'react';
import { Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import Biometrics from 'react-native-biometrics';
import Fingerprint from '../../components/fingerprint';
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
    title: 'BIOMETRIA',
    headerStyle: {
      backgroundColor: '#606060',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#f2f2f2',
      fontStyle: 'italic',
      marginLeft: '35%',
      marginRight: '35%'
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
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
      </MainWrapper>
    );
  }
}
