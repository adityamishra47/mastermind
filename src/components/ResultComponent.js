import React from 'react';
import {View, StyleSheet} from 'react-native';

function ResultComponent({...otherStyle}) {
  return <View style={[styles.container, {...otherStyle}]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 8,
    width: 8,
    marginHorizontal: 4,
  },
});

export default ResultComponent;
