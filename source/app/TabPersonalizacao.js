// Personalização TabNavigator

import React, {Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Tela1TabScreen from './source/tab/Tela1TabScreen';
import Tela2TabScreen from './source/tab/Tela2TabScreen';
import Tela3TabScreen from './source/tab/Tela3TabScreen';


const Navegador = TabNavigator ({

  Tela1: {
    screen:Tela1TabScreen
  },
  Tela2: {
    screen:Tela2TabScreen
  },
  Tela3: {
    screen:Tela3TabScreen
  }
}, {
  tabBarPosition:'bottom',
  animationEnabled:false,
  inicialRouteName:'Tel a3',
  order:['Tela2', 'Tela3', 'Tela1'],
  tabBarOptions:{
    showIcon:true,
    showLabel:true,
    activeTintColor: '#00FF00',
    inactiveTintColor:'#FF0000',
    upperCaseLabel: true, //Só Android
    pressColor:'#FF0000', // Só Android 5+
    scrollEnabled:true, //Só Android
    tabStyle:{
      backgroundColor:'#ffff00'
    },
    indicatorStyle:{

    },
    labelStyle:{
      fontSize:25
    },
    iconStyle:{
      
    }
  }
});

export default Navegador;