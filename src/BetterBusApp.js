
'use strict';

import FirstViewController from './components/FirstViewController';
import SecondViewController from './components/SecondViewController';

import React, {
  Component
} from 'react';

import {
    AppRegistry,
  TabBarIOS,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class BetterBusApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'one'
        };
    }

    render() {
        return (
            <TabBarIOS
              selectedTab={this.state.selectedTab}
              tintColor="#80CBC4"
              barTintColor="#263238">
                <TabBarIOS.Item
                    title="first"
                    selected={this.state.selectedTab === 'one'}
                    icon={{uri:'one'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'one'
                        });
                    }}>
                    <FirstViewController/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="second"
                    systemIcon="search"
                    selected={this.state.selectedTab === 'two'}
                    icon={{uri:'two'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'two'
                        });
                    }}>
                    <SecondViewController/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({

});
