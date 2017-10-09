import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native'

import MapView from 'react-native-maps';
import { MapStyles } from './ArrivalView.stylesheet';

export default class ArrivalView extends Component {
  constructor(props){
    super(props)
    this.state = {
      currPosition: {
        latitude: 0,
        longitude: 0
      },
      region: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  onRegionChange(region){
    this.setState({ region })
  }

  navigateToUserLocation(){
    console.log('hi')
  }

  getDeviceLocation(){
    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    }
    navigator.geolocation.getCurrentPosition(
      success => {
        let currPosition = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude
        }
        this.setState({ currPosition })
      },
      error => {
        console.log(error)
      },
      geoOptions
    )

  }

  componentDidMount() {
    this.getDeviceLocation()
  }

  render(){
    return(
      <View style={ {flex:1, backgroundColor:'#80CBC4', alignItems: 'center', justifyContent: 'center'} }>
        <MapView
          style={ MapStyles.fixPosition }
          loadingEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={ region => this.onRegionChange(region) }

        />
        <Text style={{textAlign: 'center'}}>
          {this.props.arrival.headsign}
        </Text>
        <Text style={{textAlign: 'center'}}>
          Bus is located at:
          {this.props.arrival.latitude}
          {this.props.arrival.longitude}
        </Text>
        <Text style={{textAlign: 'center'}}>
          Current Location:
          {this.state.currPosition.latitude}
          {this.state.currPosition.longitude}
        </Text>
        <Text style={{textAlign: 'center'}}>
          Map Location:
          {this.state.region.latitude.toPrecision(7)}
          {this.state.region.longitude.toPrecision(7)}
        </Text>
      </View>
    )
  }
}

    // return(
    //   <View style={ {flex:1, backgroundColor:'#80CBC4', alignItems: 'center', justifyContent: 'center'} }>
    //     <MapView
    //       initialRegion={{
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       }}
    //     />
    //   </View>
    // )
