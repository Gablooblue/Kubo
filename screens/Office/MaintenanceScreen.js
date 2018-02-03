
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

export default class MaintenanceScreen extends React.Component {
    static navigationOptions = {
	title: "Maintenance"
    };

    sendData = async () => {
	var url = 'https://www.freelancer-sandbox.com/api/projects/0.1/projects/?compact=';
	var data = {
	    "title": "I need some maintenance",
	    "description": "My office needs maintenance",
	    "currency": {
		"id": 7,
	    },
	     "budget": {
		"minimum": 50,
		"maximum": 100
	      },
	    "jobs": [
		    {
		      "id": 805,
		    }
		  ],
	     "location": {
		"city": "Quezon City",
		"country": {
		  "name": "Philippines"
		},
	    },
	};
	var myHeaders = new Headers({
	    "Freelancer-OAuth-v1": "aRgAxL5lRrCRay2nhsbf9u9ZIoNId",
	    'content-type': 'application/json'
	});
	var myInit = {
	    method: 'POST',
	    headers: myHeaders,
	}

	fetch(url, myInit).then(res=> res.json())
	.catch(error => console.error("Error: ", error))
	    .then(response=>console.log("Success: ", response));
    }

    render() {
	return (
	    <View style = {styles.container}>
		<Image
		   style={styles.boxImage}
		   source={require('../../assets/images/maintenance.jpg')}
		/>
		<TouchableHighlight onPress={() => this.sendData()}>
      <Image
        style={styles.boxImagee}
        source={require('../../assets/images/button.jpg')}
       />
		</TouchableHighlight>
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
  boxImagee: {
    width: 100,
    height: 29,
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
