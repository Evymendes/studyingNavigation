import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

class Tela3TabScreen extends Component {
	
	static navigationOptions = {
		tabBarLabel:'Tela 3',
		tabBarVisible:false,
		tabBarIcon:() => (
			<Image source={require('../assets/home_off.png')} style={{width:26, height:26}}/>
		)
	};

	render() {
		return (
			<View style={styles.containerDois}>
				<Text style={styles.text}> Tela3 </Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	containerDois:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		margin: 20
	},
	text: {
		fontSize: 40
	}
});

export default Tela3TabScreen;