import React, {
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT_THIRD = height / 2;

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
    paddingTop: 10,
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const MapStyles = StyleSheet.create({
  fixPosition: {
    width: SCREEN_WIDTH ,
    height: SCREEN_HEIGHT_THIRD
  }
})
