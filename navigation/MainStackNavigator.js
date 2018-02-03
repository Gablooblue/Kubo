import {StackNavigator} from 'react-navigation'
import HouseholdScreen from '../screens/Household/index';
import OfficeScreen from '../screens/Office/index';
import GardenScreen from '../screens/Garden/index';

const HouseholdStack = StackNavigator(
    {
	Index: { screen: HouseholdScreen },
    }
);
const OfficeStack = StackNavigator(
    {
	Index: { screen: OfficeScreen},
    }
);
const GardenStack = StackNavigator(
    {
	Index: { screen: GardenScreen},
    }
);
