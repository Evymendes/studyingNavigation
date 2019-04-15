import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class ListItem extends Component {

	constructor(props){
	super(props);
	this.state = {
		msg:props.data.msg
	};
	this.click = this.click.bind(this);

	}

	click() {
		alert("Clicou para abrir a conversa: " +this.props.data.key);
	}

	render() {
		return(
			//<Text> Olá </Text>
			<TouchableHighlight onPress={this.click} underlayColor='#CCCCCC'>
				<View style={styles.item}>
					<View style={styles.info}>
						<Text numberOfLine={1} style={styles.nome}>{this.props.data.nome}</Text>
						<Text numberOfLines={1} style={styles.msg}>{this.state.msg} </Text>
					</View>
				</View>

			</TouchableHighlight>
		);
	}
}
const styles = StyleSheet.create ({
	item:{
		flex: 1,
		height:60,
		marginLeft:10,
		borderBottomWidth:1,
		borderColor:'#CCCCCC',
		flexDirection:'row'
	},
	imagem: {
		width:40,
		height:40,
		marginTop:10,
		borderRadius:20
	},
	info: {
		flex:1,
		marginLeft:10,
		flexDirection:'column',
		justifyContent:'center'
	},
	nome: {
		fontSize:15,
		fontWeight:'bold'
	}

});

export default ListItem;

// <Image source={{uri:this.props.data.img}} style={styles.imagem}/>