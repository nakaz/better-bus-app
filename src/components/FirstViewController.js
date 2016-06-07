'use strict';

import React, {
  Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Views} from '../styles/StyleSheet';

import Arrivals from '../lib/Arrivals';

export default class FirstViewController extends Component {
  constructor(){
    super();
    this.text = '';
  }
  componentDidMount(){
    console.log('hello');
    const arrivals = new Arrivals('kahala mall');
    this.text = arrivals.load();
  }
  render() {
    return (
     <View style={Views.container}>
       <Text style={Views.description}>
         {this.text}
       </Text>
     </View>
    );
  }
}
