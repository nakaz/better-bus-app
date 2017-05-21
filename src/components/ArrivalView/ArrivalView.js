import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native'


export default class ArrivalView extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={ {flex:1, backgroundColor:'#80CBC4', alignItems: 'center', justifyContent: 'center'} }>
        <Text style={{textAlign: 'center'}}>
          Map Stuff Here!!! :D
        </Text>
        <Text style={{textAlign: 'center'}}>
          {this.props.arrival.headsign}
        </Text>
        <Text style={{textAlign: 'center'}}>
          more DEEETS here
        </Text>
      </View>
    )
  }
}
