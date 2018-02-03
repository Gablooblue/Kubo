import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowser } from 'expo';

import {NavigationActions} from 'react-navigation';

import { MonoText } from "../../components/StyledText";

export default class plumbing extends React.Component {
  static navigationOptions = {
    title: "Plumbing"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Image
            source={require('../assets/images/plumbingbanner.jpg')}
            />
          <Text style={styles.description}>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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
  title: {
     fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  description: {
    fontSize: 10,
    textAlign: 'flex-start',
  }

});
