
'use strict';

import FirstViewController from './components/FirstViewController';
import SecondViewController from './components/SecondViewController';

import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  StyleSheet,
  Text,
  View
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
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
