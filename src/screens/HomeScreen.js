import { TabNavigator } from 'react-navigation';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import DashboardScreen from './DashboardScreen';

const HomeScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  Dashboard: { screen: DashboardScreen },
  Settings: { screen: SettingsScreen },
}, {
  initialRouteName: 'Dashboard',
});

HomeScreenNavigator.navigationOptions = {
  title: '',
};

export default HomeScreenNavigator;
