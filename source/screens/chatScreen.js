import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ImageBackground, FlatList} from 'react-native';

import MsgItem from '../components/MsgItem';

class ChatScreen extends Component {

	constructor(props){
		super(props);
		this.state = {
			chat:[
				{key:'1', nome: 'Evelyn', msg:'Hello!!!', m: true},
				{key:'1', nome: 'Carla', msg:'OI quanto tempo hem!!!', m: false},
				{key:'1', nome: 'Evelyn', msg:'Verdade, ando meio sumida por conta do trabalho e faculdade, que comecei esse mês :D', m: true},
				{key:'1', nome: 'Carla', msg:'Sério!!! não sabia que tinha entrado na faculdade, parabénssss! Já deu tudo certo em nome de Jesus, e ai está gostando?', m: false},
				{key:'1', nome: 'Evelyn', msg:'De mais, e você como está?', m: true},
				{key:'1', nome: 'Carla', msg:'Estou bem cada dia melhor', m: false},
				{key:'1', nome: 'Evelyn', msg:'que maravilha vou ter que sair aqui bjuss', m: true},
				{key:'1', nome: 'Carla', msg:'até mais bjus', m: false},
			]
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('../assets/bg.jpg')} style={styles.chat}>
					<FlatList
						data={this.state.chat}
						renderItem={({item})=> <MsgItem data={item} />}
					/>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: (Platform.OS=='ios') ? 20 : 0
	},
	chat:{
		flex:1
	}
})

export default ChatScreen; 