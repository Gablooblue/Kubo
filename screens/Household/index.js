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

<<<<<<< HEAD
import { MonoText } from '../../components/StyledText';

export default class index extends React.Component {
  static navigationOptions = {
    title: Household
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
               style={styles.boxImage}
               source={require('../../assets/images/kitchen.jpg')}
            />
            <Image
               style={styles.boxImage}
               source={require('../../assets/images/plumbing.jpg')}
            />
            <Image
               style={styles.boxImage}
               source={require('../../assets/images/houselight.jpg')}
            />
          </View>


        </ScrollView>

      </View>
    );
  }

=======
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
>>>>>>> 5768129e86d6e6e21fd587133cab537996bd79a5
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
