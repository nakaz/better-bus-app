'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';

export default class FirstViewController extends Component {
    render() {
        return (
        <View style={styles.container}>
          <Text style={styles.description}>
            First View Controller
          </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

