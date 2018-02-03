import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    PixelRatio,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class GardenScreen extends React.Component {
    static navigationOptions = {
	title: "Garden"
    }

    render() {
	return (
	    <View>
	    </View>
	)
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fff',
	...Platform.select({
	    ios: {
		paddingTop: 30,
	    },
	}),
    },
    title: {
	fontSize: 30,
	textAlign: 'center',
    },
})
