import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
});

const App = createAppContainer(AppNavigator);

export default AppNavigator;