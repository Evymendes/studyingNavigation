import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class TestandoScreen extends Component {

	constructor(props){
		super(props);
		this.state = {
			lista:[
				{key:1, nome:'Evelyn', idade:24},
				{key:2, nome:'Carlos', idade:18},
				{key:3, nome:'Eduaro', idade:48}
			]
		}
	}
	
	render() {
		return (
			<View>
				<FlatList
					data={this.state.lista}
					renderItem={({item}) => <Estilos data={item}} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
})

export default TestandoScreen;