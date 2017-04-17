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
  ListView,
  StatusBar,
  Button
} from 'react-native';

import {Views} from '../styles/StyleSheet';

import ArrivalQuery from '../lib/Arrivals';
import ArrivalItem from './ArrivalItem';

export default class FirstViewController extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      stop: ''
    };

    this.requestArrival = this.requestArrival.bind(this)
  }

  componentDidMount(){
    console.log('hi')
  }

  requestArrival() {
    console.log('STATE', this.state.stop)
    ArrivalQuery(this.state.stop)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data.stopTimes.arrival),
          loaded: true
        })
      }).done();
  }

  render() {
    if (!this.state.loaded){
      return this.stopPrompt();
    }

    return (
      <View style={{flex: 0}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderView}
          style={Views.listView}
        />
      </View>
    )
  }

  stopPrompt(){
    return (
      <View style={ Views.inputContainer }>
        <TextInput
          style={ Views.input }
          keyboardType="numbers-and-punctuation"
          onChangeText={(stop) => {
            this.setState({stop})
          }}
          onSubmitEditing={this.requestArrival}
          returnKeyType='search'
          placeholder='Enter Bus Route'
        />
      </View>
    )
  }
        // <Button
        //   style={ Views.button }
        //   onPress={this.requestArrival}
        //   title="Locate!"
        // />

  renderView(arrival){
    return (
      <ArrivalItem arrival={arrival} />
   );
  }
}
