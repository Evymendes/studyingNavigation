 import React, { Component } from 'react';
import { View, Platform, StyleSheet} from 'react-native';

import FlatListScreen from './source/screens/flatListScreen';
import ChatScreen from './source/screens/chatScreen';
import TextandoScreen from './source/screens/TestandoScreen';

class App extends Component {

  render() { 
    return (
      <View style={styles.container}>
       <TestandoScreens />
        <ChatScreen />
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
export default App;

// <FlatListScreen />








//Personalização DrawerNavigator

// import React, {Component } from 'react';
// import { DrawerNavigator } from 'react-navigation';

// import Tela1DrawerScreen from './source/drawer/Tela1DrawerScreen';
// import Tela2DrawerScreen from './source/drawer/Tela2DrawerScreen';
// import Tela3DrawerScreen from './source/drawer/Tela3DrawerScreen';


// const Navegador = DrawerNavigator ({

//   Tela1: {
//     screen:Tela1DrawerScreen
//   },
//   Tela2: {
//     screen:Tela2DrawerScreen
//   },
//   Tela3: {
//     screen:Tela3DrawerScreen
//   }
// }, {
//     drawerPosition: 'rigth', //vim da direita ou esquerda
//     drawerWhidth:100, // tamanho
//     drawerBackgroundColor: 'transparent',
//     contentOptions:{
//       activeTintColor: 'green', //cor quando o item tiver ativo
//       inactiveTintColor: 'red', // cor inativo
//       activeBackgroundColor: '#FF5500',
//       itemsContainerStyle:{
//         marginTop: 100
//       },
//       itemStyle:{        //cada um dos items
//         height:50
//       },
//       labelStyle:{        // propriedade do Texto
//         fontSize:25
//       },
//       iconContainerStyle:{      // container que fica o icone
//         backgroundColor: 'black'
//       }
//     }
// });

// export default Navegador;






//Personalização TabNavigator

// import React, {Component } from 'react';
// import { TabNavigator } from 'react-navigation';

// import Tela1TabScreen from './source/tab/Tela1TabScreen';
// import Tela2TabScreen from './source/tab/Tela2TabScreen';
// import Tela3TabScreen from './source/tab/Tela3TabScreen';


// const Navegador = TabNavigator ({

//   Tela1: {
//     screen:Tela1TabScreen
//   },
//   Tela2: {
//     screen:Tela2TabScreen
//   },
//   Tela3: {
//     screen:Tela3TabScreen
//   }
// }, {
//   tabBarPosition:'bottom',
//   animationEnabled:false,
//   inicialRouteName:'Tel a3',
//   order:['Tela2', 'Tela3', 'Tela1'],
//   tabBarOptions:{
//     showIcon:true,
//     showLabel:true,
//     activeTintColor: '#00FF00',
//     inactiveTintColor:'#FF0000',
//     upperCaseLabel: true, //Só Android
//     pressColor:'#FF0000', // Só Android 5+
//     scrollEnabled:true, //Só Android
//     tabStyle:{
//       backgroundColor:'#ffff00'
//     },
//     indicatorStyle:{

//     },
//     labelStyle:{
//       fontSize:25
//     },
//     iconStyle:{

//     }
//   }
// });

// export default Navegador;






// Personalização StackNavigator

// import React, {Component } from 'react';
// import { StackNavigator } from 'react-navigation';

// import Tela1StackScreen from './source/stack/Tela1StackScreen';
// import Tela2StackScreen from './source/stack/Tela2StackScreen';
// import Tela3StackScreen from './source/stack/Tela3StackScreen';


// const Navegador = StackNavigator ({

//   Tela1: {
//     screen:Tela1StackScreen
//   },
//   Tela2: {
//     screen:Tela2StackScreen
//   },
//   Tela3: {
//     screen:Tela3StackScreen
//   }
// });

// export default Navegador;
