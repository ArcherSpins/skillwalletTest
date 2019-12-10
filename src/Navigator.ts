import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import CloudCertsScreen from './screens/CloudCertsScreen';
import ChartsScreen from './screens/ChartsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CloudCerts: CloudCertsScreen,
    Charts: ChartsScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);