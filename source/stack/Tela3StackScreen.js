import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const Tela3StackScreenHeaderRight = ()=>{
	return (
		<View>
			<Button title="Opção 2" onPress={()=>{}} /> 
		</View>
	);
}
const Tela3StackScreenHeaderLeft = ()=>{
	return (
		<View>
			<Text>Alguma Coisa </Text> 
		</View>
	);
}

class Tela3StackScreen extends Component {
	
	static navigationOptions = ({navigation}) => ({
		title: "Tela3",
		headerRight:Tela3StackScreenHeaderRight(),
		headerLeft:Tela3StackScreenHeaderLeft()
	});

	constructor(props){
		super(props);
		this.state = {};

		this.voltarTela = this.voltarTela.bind(this);
		this.inicio = this.inicio.bind(this);
	}

	voltarTela() {
		this.props.navigation.goBack();
	}

	inicio() {
		this.props.navigation.dispatch(StackActions.reset({
			index:0,
			actions:[
				NavigationActions.navigate({routeName:'Tela1'})
			]
		}));
	}

	render() {
		return (
			<View style={styles.containerDois}>
				<Text style={styles.text}> Tela3 </Text>
				<Button title="Voltar para o Anterior" onPress={this.voltarTela} />
				<Button title="Voltar para o Inicio" onPress={this.inicio} />
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

export default Tela3StackScreen;