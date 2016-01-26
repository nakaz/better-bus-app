'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';

import {Views} from '../styles/StyleSheet';

export default class FirstViewController extends Component {
    render() {
        return (
        <View style={Views.container}>
          <Text style={Views.description}>
            First View Controller
          </Text>
        </View>
        );
    }
}