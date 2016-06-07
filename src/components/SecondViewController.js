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

export default class SecondViewController extends Component {
  render() {
    return (
      <View style={Views.container}>
        <Text style={Views.description}>
          Second View Controller
        </Text>
      </View>
    );
  }
}
