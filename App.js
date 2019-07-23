import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';

const AppNavigator = createStackNavigator({
  Home: {
    screen: CityList
  }
});

export default createAppContainer(AppNavigator);