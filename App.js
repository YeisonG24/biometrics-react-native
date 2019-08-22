import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingScreen from './src/screens/landing';

const MainNavigator = createStackNavigator({
  Landing: { screen: LandingScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
