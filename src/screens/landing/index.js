import React, { Component } from 'react';
import { Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import { MainWrapper, WrapperSection, WrapperButton, TextTitle, ButtonCustom, TextButton } from './style';

const optionalConfig = {
  title: 'Autenticación Requerida',
  imageColor: '#e00606',
  imageErrorColor: '#ff0000',
  sensorDescription: 'Toque el sensor',
  sensorErrorDescription: 'Huella no reconocida',
  cancelText: 'Cancelar',
  fallbackLabel: 'Mostrar código de accesso',
  unifiedErrors: false,
  passcodeFallback: false,
};

export default class Landing extends Component {
  static navigationOptions = {
    title: 'Biometrics',
  };

  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
      <MainWrapper>
        <TextTitle>Touch Id</TextTitle>
        <WrapperSection>
          <WrapperButton onPress={this.onPressHandler}>
            <ButtonCustom source={require('../../../assets/img_huella.png')} />
          </WrapperButton>
          <TextButton>Toque la huella</TextButton>
        </WrapperSection>
      </MainWrapper>
    );
  }
}
