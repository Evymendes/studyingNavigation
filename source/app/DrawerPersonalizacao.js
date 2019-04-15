//Personalização DrawerNavigator

import React, {Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Tela1DrawerScreen from './source/drawer/Tela1DrawerScreen';
import Tela2DrawerScreen from './source/drawer/Tela2DrawerScreen';
import Tela3DrawerScreen from './source/drawer/Tela3DrawerScreen';


const Navegador = DrawerNavigator ({

  Tela1: {
    screen:Tela1DrawerScreen
  },
  Tela2: {
    screen:Tela2DrawerScreen
  },
  Tela3: {
    screen:Tela3DrawerScreen
  }
}, {
    drawerPosition: 'rigth', //vim da direita ou esquerda
    drawerWhidth:100, // tamanho
    drawerBackgroundColor: 'transparent',
    contentOptions:{
      activeTintColor: 'green', //cor quando o item tiver ativo
      inactiveTintColor: 'red', // cor inativo
      activeBackgroundColor: '#FF5500',
      itemsContainerStyle:{
        marginTop: 100
      },
      itemStyle:{        //cada um dos items
        height:50
      },
      labelStyle:{        // propriedade do Texto
        fontSize:25
      },
      iconContainerStyle:{      // container que fica o icone
        backgroundColor: 'black'
      }
    }
});

export default Navegador;
