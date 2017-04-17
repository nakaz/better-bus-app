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
import ArrivalItem from './ArrivalItem';

export default class SearchList extends Component {
  constructor(props){
    super(props)
    console.log(this.props.dataSource)
    console.log('tada')
  }

  renderView(arrival){
    return (
      <ArrivalItem arrival={arrival} />
   );
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this.renderView}
          style={Views.listView}
        />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}
