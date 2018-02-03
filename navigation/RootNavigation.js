import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import HouseholdScreen from '../screens/Household/index';
import OfficeScreen from '../screens/Office/index';
import GardenScreen from '../screens/Garden/index';
import MaintenanceScreen from '../screens/Office/MaintenanceScreen';
import LightsScreen from '../screens/Office/LightsScreen';
import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const HouseholdStack = StackNavigator(
    {
	Index: { screen: HouseholdScreen },
    },
    {
	headerMode: 'none'
    }
);
const OfficeStack = StackNavigator(
    {
	Index: { screen: OfficeScreen},
	Maintenance: { screen: MaintenanceScreen },
	Lights: {screen: LightsScreen},
    },
    {
	headerMode: 'none'
    }
);
const GardenStack = StackNavigator(
    {
	Index: { screen: GardenScreen},
    },
    {
	headerMode: 'none'
    }
);

const RootStackNavigator = StackNavigator(
    {
	Main: {
	    screen: MainTabNavigator,
	},
	Household: {
	    screen: HouseholdStack,
	},
	Office:{
	    screen: OfficeStack,
	},
	Garden: {
	    screen: GardenStack,
	},
    },
    {
	navigationOptions: () => ({
	    headerTitleStyle: {
		fontWeight: 'normal',
	    },
	}),
    }
);

export default class RootNavigator extends React.Component {
    componentDidMount() {
	this._notificationSubscription = this._registerForPushNotifications();
    }

    componentWillUnmount() {
	this._notificationSubscription && this._notificationSubscription.remove();
    }

    render() {
	return <RootStackNavigator />;
    }

    _registerForPushNotifications() {
	// Send our push token over to our backend so we can receive notifications
	// You can comment the following line out if you want to stop receiving
	// a notification every time you open the app. Check out the source
	// for this function in api/registerForPushNotificationsAsync.js
	registerForPushNotificationsAsync();

	// Watch for incoming notifications
	this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = ({ origin, data }) => {
	console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
    };
}
