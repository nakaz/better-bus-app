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
import ArrivalView from './ArrivalView';

export default class SearchList extends Component {
  constructor(props){
    super(props)
    this.renderView = this.renderView.bind(this)
  }

  textTest(arrival){
    return(
      <ArrivalView arrival={arrival} />
    )
  }

  renderView(arrival){
    var onPress = () => this.props.navigator.push({
      component: this.textTest,
      title: arrival.headsign,
      passProps: arrival
    })

    return (
      <ArrivalItem
        arrival={arrival}
        onPress={onPress}
      />
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
