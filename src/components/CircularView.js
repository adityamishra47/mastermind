import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function CircularView({color, borderColor = 'transparent', onPress = {}}) {
  return (
    <TouchableOpacity onPress={() => onPress(color)}>
      <View
        style={[
          styles.container,
          {backgroundColor: color, borderColor: borderColor},
        ]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2,
    borderWidth: 3,
    marginHorizontal: 10,
  },
});

export default CircularView;
