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

export default class HomeScreen extends React.Component {
<<<<<<< HEAD
  static navigationOptions = {
    title: 'kubo'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
               style={styles.boxImage}
               source={require('../assets/images/household.jpg')}

            />
            <Image
               style={styles.boxImage}
               source={require('../assets/images/office.jpg')}
            />
            <Image
               style={styles.boxImage}
               source={require('../assets/images/garden.jpg')}
            />
          </View>
=======
    static navigationOptions = {
	title: 'kubo'
    };
>>>>>>> 5768129e86d6e6e21fd587133cab537996bd79a5

    handleHousehold= () => {
	const resetAction = NavigationActions.reset({
	    index: 0,
	    actions: [
		NavigationActions.navigate({ routeName: 'Household'})
	    ]});
	this.props.navigation.dispatch(resetAction)
    }


    render() {
	return (
	    <View style={styles.container}>
		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
		    <View style={styles.welcomeContainer}>
			<Image
			    style={styles.boxImage}
			    source={require('../assets/images/household.jpg')}

			/>
			<TouchableHighlight onPress={() => this.handleHousehold}/>
				<Image
				    source={require('../assets/images/household.jpg')}
				    style={{height:50, width:50}} />
			    </TouchableHighlight>
			    <Image
				style={styles.boxImage}
				source={require('../assets/images/office.jpg')}
			    />
			    <Image
				style={styles.boxImage}
				source={require('../assets/images/garden.jpg')}
			    />
			</View>


<<<<<<< HEAD
=======
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

>>>>>>> 5768129e86d6e6e21fd587133cab537996bd79a5
});
