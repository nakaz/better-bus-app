'use strict';

import React, {
  StyleSheet,
} from 'react-native';

export const Views = StyleSheet.create({
  title: {
   fontSize: 20,
   color: '#EEE'
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: '#80CBC4',
  },
  container: {
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 60,
    textAlign: 'center'
  },
  listView: {
    paddingTop: 20,
    paddingBottom: 20,

  }

});
