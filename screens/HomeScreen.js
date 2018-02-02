import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
	header: null,
    };

    render() {
	return (
	    <View style={styles.container}>
		<Text style={styles.title}>Kubo</Text>
	    </View>
	);
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
    }
});
