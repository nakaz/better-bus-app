'use strict';

import React, {
  StyleSheet,
} from 'react-native';

export const Views = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 49,
  },
  container: {
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'black',
    height: 100,
  },
  listView: {
    flex:0
  }
});
