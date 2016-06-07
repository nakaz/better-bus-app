'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';

import {Views} from '../styles/StyleSheet';

import Arrivals from '../lib/Arrivals';

export default class FirstViewController extends Component {

  constructor(){
    super();
    const arrival = new Arrivals('127');

    this.text = arrival.load();

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
// fetchData() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           movies: responseData.movies,
//         });
//       })
//       .done();
//   }
