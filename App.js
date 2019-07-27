import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';
import StartScreen from './StartScreen';

const AppNavigator = createStackNavigator(
  {
    StartScreen: StartScreen,
    CityList: CityList,
    Detail: WeatherDetailScreen,
  },
  {
    initialRouteName: 'StartScreen',
  }
);

export default createAppContainer(AppNavigator);