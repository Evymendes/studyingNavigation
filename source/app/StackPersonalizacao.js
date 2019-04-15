// Personalização StackNavigator

import React, {Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Tela1StackScreen from './source/stack/Tela1StackScreen';
import Tela2StackScreen from './source/stack/Tela2StackScreen';
import Tela3StackScreen from './source/stack/Tela3StackScreen';


const Navegador = StackNavigator ({

  Tela1: {
    screen:Tela1StackScreen
  },
  Tela2: {
    screen:Tela2StackScreen
  },
  Tela3: {
    screen:Tela3StackScreen
  }
});

export default Navegador;