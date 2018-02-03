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
import { Font } from 'expo';

export default class ProjectsScreen extends React.Component {
    static navigationOptions = {
	header: null,
    };

    constructor(props){
	super(props)

	this.state = {
	    data: [],
	}
    }

    componentWillMount()
    {
	this.fetchData();
    }

    fetchData = async () => {
	var myHeaders = new Headers({
	    "Freelancer-OAuth-v1": "aRgAxL5lRrCRay2nhsbf9u9ZIoNId"
	});
	var myInit = {
	    method: 'GET',
	    mode: 'cors',
	}
	const response = await fetch("https://www.freelancer-sandbox.com/api/projects/0.1/projects/?owners\[\]=25832341", myInit);
	const json = await response.json();
	this.setState({data: json.result});
	console.log(this.state.data.projects)
    }

    render() {
	return (
	    <View style = {styles.container}>
		<Text style={styles.title}>Projects</Text>
		<FlatList
		    data={this.state.data.projects}
		    keyExtractor={(x,i) => i}
		    renderItem = {({item})=>
			    <Text style= {styles.item}>
				{ item.title }
			    </Text>
		    }
		/>
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
  item: {
	   padding: 10,
	   fontSize: 15,
	   borderBottomWidth: 1/ PixelRatio.get(),
  }
});
