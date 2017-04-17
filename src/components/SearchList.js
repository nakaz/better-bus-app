import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
} from 'react-native';

import {Views} from '../styles/StyleSheet';
import ArrivalItem from './ArrivalItem';

export default class SearchList extends Component {
  constructor(props){
    super(props)
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
      </View>
    )
  }
}
