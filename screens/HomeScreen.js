import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
//import HouseholdScreen from 'Household/index';
import { MonoText } from '../components/StyledText';
import {NagivationActions} from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'kubo'
  };

    handleHousehold = () => {
	    const resetAction = NavigationActions.reset({
	    index: 0,
	    actions: [
		NavigationActions.navigate({ routeName: 'Household'})
	    ]});
	this.props.navigation.dispatch(resetAction)
    }
    handleOffice = () => {
	    const resetAction = NavigationActions.reset({
	    index: 0,
	    actions: [
		NavigationActions.navigate({ routeName: 'Office'})
	    ]});
	this.props.navigation.dispatch(resetAction)
    }
    handleGarden= () => {
	    const resetAction = NavigationActions.reset({
	    index: 0,
	    actions: [
		NavigationActions.navigate({ routeName: 'Garden'})
	    ]});
	this.props.navigation.dispatch(resetAction)
    }


    render() {
    	return (
    	    <View style={styles.container}>
        		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        		    <View style={styles.welcomeContainer}>
				<TouchableHighlight onPress = {() => handleHousehold()}>
            			<Image
            			    style={styles.boxImage}
            			    source={require('../assets/images/household.jpg')}
				/>
				</TouchableHighlight>
				<TouchableHighlight onPress = {() => handleOffice()}>
            			    <Image
            				style={styles.boxImage}
            				source={require('../assets/images/office.jpg')}
            			    />
				</TouchableHighlight>
				<TouchableHighlight onPress = {() => handleGarden()}>
            			    <Image
            				style={styles.boxImage}
            				source={require('../assets/images/garden.jpg')}
            			    />
				</TouchableHighlight>
        			  </View>
              </ScrollView>
          </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fcfdfe',
    },
    boxContainer: {
	alignItems: 'center',
	margin: 20,
    },
    boxImage: {
	width: 345,
	height: 345,
	resizeMode: 'contain',
	marginVertical: 10,
	alignSelf: 'center',
    },
    boxes: {
	alignItems: 'center',
	marginHorizontal: 50,
    },
    top: {
	width: 400,
	margin: 0
    },


});
