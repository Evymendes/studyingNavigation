import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'

class Tela1TabScreen extends Component {

	static navigationOptions = {
		tabBarLabel:'Tela 1',
		tabBarIcon:({tintColor, focused}) => (
			<Image source={require('../assets/home_off.png')} style={{width:26, height:26}} />
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Tela 1 </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		margin: 20
	},
	text: {
		fontSize: 40
	}	
});

export default Tela1TabScreen;