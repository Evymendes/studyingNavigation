import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {StyleSheet, View, Text, Button, Platform} from 'react-native'

class Tela1StackScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		title:"Tela 1",
		header:null
	});

	constructor(props){
		super(props);
		this.state = {platform: Platform.Os};

		this.abrirTela = this.abrirTela.bind(this);
	}

	abrirTela() {
		this.props.navigation.navigate("Tela2");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Tela 1 </Text>
				<Button title="Ir Tela 2" onPress={() => this.props.navigation.navigate("Tela2")} />
				<Button title="Tela2 outra forma" onPress={this.abrirTela} />

				<Text>Sistema: {Platform.OS}, versão: {Platform.Version} </Text>
				<Text style={styles.plataforma}>{this.state.platform} Mudando de cor dependendo do sistema operacional do celular</Text>
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
	},
	plataforma: {
		color: (Platform.OS === 'ios') ? 'red' : 'yellow'
	},
	plataforma:Platform.select({
		ios:{
			fontSize:16,
		},
		android:{
			fontSize:19
		}
	})
});

export default Tela1StackScreen;