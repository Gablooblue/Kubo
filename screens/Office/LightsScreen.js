import React from 'react';
import{
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../../components/StyledText';

export default class LightsScreen extends React.Component {
    static navigationOptions = {
	title: "Lights"
    };
    
    render() {
	return (
	    <View style = {styles.container}>
		<Image
		   style={styles.boxImage}
		   source={require('../../assets/images/lights.jpg')}
		/>
	    </View>
	)
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
