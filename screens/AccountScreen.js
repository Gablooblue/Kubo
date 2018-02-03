import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { WebBrowser } from 'expo';

export default class AccountScreen extends React.Component {
    static navigationOptions = {
	header: null,
    };

    constructor(props){
	super(props)
	
    }

    render() {
	return (
	    <View style = {styles.container}>
		<Text> </Text>
	    </View>
	);
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
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
});
