import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Tela2StackScreen extends Component {
	
	static navigationOptions = ({navigation}) => ({
		title: "Tela2",
		headerStyle:{
			backgroundColor:'#cccccc'
		},
		headerTintColor: '#FF0000',
		headerTitleStyle:{
			fontSize:25
		},
		headerBackTintStyle:{
			fontSize:30
		},
		//headerTruncatedBackTitle:'Voltar!',
		headerRight: <Text> Opção 1 </Text>
	});

	constructor(props){
		super(props);
		this.state = {};

		this.abrirTela = this.abrirTela.bind(this);
	}

	abrirTela() {
		this.props.navigation.navigate("Tela3");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Tela2 </Text>
				<Button title="Tela 3" onPress={this.abrirTela} />
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

export default Tela2StackScreen;