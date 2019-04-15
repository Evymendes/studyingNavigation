import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import Antonio from '../assets/antonio.png';
// import Carlos from './source/assets/carlos.png';
// import cleusa from './source/assets/cleusa.png';

class FlatListScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      list:[
        // {key:'1', nome:'Carlos', conversa:'Quando termina de estudar?', img:'https://www.b7web.com.br/avatar1.png' },
        {key:'1', nome:'Antonio', msg:'oi Tudo Bem?jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhjghjghjjjjj', img:'estrela'},
        {key:'2', nome:'Cleusa', msg:'Quando termina de estudar?'},
        {key:'3', nome:'Carlos', msg:'Quando termina de estudar?'}
      ]
    };    
  }

  render() { 
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <ListItem data={item} />}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS=='ios') ? 20 : 0,
  }
  
});

export default FlatListScreen;