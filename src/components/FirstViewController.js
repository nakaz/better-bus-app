'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  ListView,
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer'

import {Views} from '../styles/StyleSheet';

import ArrivalQuery from '../lib/Arrivals';
import SearchList from './SearchList'

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
  }

  requestArrival() {
    ArrivalQuery(this.state.stop)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data.stopTimes.arrival),
          loaded: true
        })
      })
      .then(() => {
        this.props.navigator.push({
          component: SearchList,
          title: 'Search List',
          passProps: { dataSource: this.state.dataSource }
        })
      });
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={ Views.inputContainer }
        scrollEnabled={false}
      >
        <TextInput
          style={ Views.input }
          keyboardType="numbers-and-punctuation"
          onChangeText={(stop) => {
            this.setState({stop})
          }}
          onSubmitEditing={this.requestArrival}
          returnKeyType='search'
          placeholder='Enter Bus Route'
          enablesReturnKeyAutomatically={true}
          clearButtonMode='while-editing'
        />
        <KeyboardSpacer/>
      </ScrollView>
    )
  }
}
