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
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HouseholdScreen extends React.Component {
    render(){
	return (
	    <View style = {styles.container} >
		<Text style = {styles.title}>
		    Household
		</Text>
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
    }
    title: {
	fontSize: 30,
	textAlign: 'center',
    }
})
