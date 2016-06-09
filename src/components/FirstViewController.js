'use strict';

import React, {
  Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import {Views} from '../styles/StyleSheet';

import Arrivals from '../lib/Arrivals';

export default class FirstViewController extends Component {
  constructor(props){
    super(props);
    // this.state = {};
  }
  // componentDidMount(){
  //   console.log('loaded')
  //   this.loadState();
  // }
  componentDidMount(){
    console.log('hello');
    const arrivals = new Arrivals('kahala mall');
    this.text = arrivals.load();
    arrivals.getData(127);
  }
  // setInitialState(){
  //   return {
  //     text: ''
  //   }
  // }

  render() {
    return (
     <View style={Views.container}>
       <Text style={Views.description}>
         {this.text}
       </Text>
     </View>
    );
  }
  //
  // loadState(){
  //   console.log('setting state')
  //   this.state = {
  //     text: 'hello'
  //   }
  //   console.log(this.state.text);
  // }

  // updateText(text){
  //   console.log('changing');
  //   this.setState((state) => {
  //     return {
  //       text: text
  //     }
  //   })
  // }

  // textValue(){
  //   return this.state.text;
  // }

  // render() {
  //   return (
  //     <View style={Views.container}>
  //       <TextInput
  //         style={Views.input}
  //         placehoder='Testing...'
  //         onFocus={()=> console.log('focused')}
  //         onChangeText={(text) => this.updateText(text)}
  //       />
  //       <Text style={Views.description}>
  //         {this.textValue()}
  //       </Text>
  //     </View>
  //   );
  // }
}
