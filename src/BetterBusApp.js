'use strict';

import FirstViewController from './components/FirstViewController';
import SecondViewController from './components/SecondViewController';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  NavigatorIOS,
  TabBarIOS,
} from 'react-native';

import {Views} from './styles/StyleSheet';

export default class BetterBusApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'one'
    }
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor="#80CBC4"
        barTintColor="#263238">
          <TabBarIOS.Item
              title="Bus Stop"
              selected={this.state.selectedTab === 'one'}
              onPress={() => {
                  this.setState({
                      selectedTab: 'one'
                  });
              }}>
              <NavigatorIOS
                style={ Views.wrapper }
                initialRoute={{
                  component: FirstViewController,
                  title: 'Better Bus App'
                }}
              />
          </TabBarIOS.Item>
          <TabBarIOS.Item
              title="second"
              systemIcon="search"
              selected={this.state.selectedTab === 'two'}
              onPress={() => {
                  this.setState({
                      selectedTab: 'two'
                  });
              }}>
              <View style={ Views.wrapper }>
                <SecondViewController/>
              </View>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
