import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MsgItem extends Component {

	constructor(props){
		super(props);
		this.estilo = styles.balaoEsquerda;
			if(props.data.m) {
				this.estilo = styles.balaoDireita;
			}
	}

	render() {
		return (
			<View style={[styles.balao, this.estilo]}>
				<Text style={styles.nome}> {this.props.data.nome} </Text>
				<Text style={styles.msg}> {this.props.data.msg}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
		balao:{
			backgroundColor:'red',
			margin:10,
			padding:10,
			borderRadius:10
		},
		balaoEsquerda:{
			backgroundColor:"#FFFFFF",
			alignSelf:'flex-start',
			marginRight:50
		},
		balaoDireita:{
			backgroundColor:'#00bcd4',
			alignSelf:'flex-end',
			marginLeft:50
		},
		nome:{
			fontSize:15,
			fontWeight:'bold'

		},
		// msg:[
		// ]
})

export default MsgItem;