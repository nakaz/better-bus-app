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
} from 'react-native';

import {Views} from '../styles/StyleSheet';

import Arrivals from '../lib/Arrivals';

export default class FirstViewController extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  // componentDidMount(){
  //   console.log('loaded')
  //   this.loadState();
  // }
  componentDidMount(){
    console.log('hello');
    const arrivals = new Arrivals('kahala mall');
    this.text = arrivals.load();
    // this.setState((state) => {
    //   arrivals: arrivals.getData(127)
    // })
    // arrivals.getData(127);
    arrivals.getData(127).then((res)=>{
      return res.json()
    }).then((data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.stopTimes.arrival),
        loaded: true
      })
    }).done();
  }
  // setInitialState(){
  //   return {
  //     text: ''
  //   }
  // }

  render() {
    if (!this.state.loaded){
      return this.renderLoadingView();
    }

    // let arrival = this.state.arrivals;
    // return this.renderView(arrival);
    console.log('render', this.state.dataSource);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderView}
        style={Views.listView}
      />
    )
  }

  renderLoadingView(){
    return (
      <View style={ Views.container }>
        <Text>
          Loading bus times...
        </Text>
      </View>
    )
  }

  renderListView(){

  }

  renderView(arrival){
    return (
      <View style={ Views.container }>
        <Text style={Views.title}>{arrival.headsign}</Text>
        <Text style={Views.description}>Route: {arrival.route}</Text>
        <Text style={Views.description}>Arrives at: {arrival.stopTime}</Text>
        <Text style={Views.description}>ETA: {arrival.estimated} minute</Text>

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
