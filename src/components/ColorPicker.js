import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CircularView from './CircularView';
import Constants from '../utils/Constants';
import {useSelector, useDispatch} from 'react-redux';

function ColorPicker(props) {
  //======Redux selectors and dispatchers
  const dispatch = useDispatch();

  const selectedColor = useSelector((state) => {
    return state.selectedColor;
  });
  console.log('selectedColor: ' + selectedColor);

  //========color click to be used for option selection
  const handleColorClick = (color) => {
    dispatch({type: Constants.SELECTED_COLOR, payload: color});
  };

  //=========border color to highlight the current selected color
  const borderColor = (boxColor) => {
    if (selectedColor === boxColor) return 'green';
    return boxColor;
  };

  //=========Flatlist component to render the colors List
  const ColorList = ({data}) => {
    return (
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <View style={{paddingStart: 10}}>
            <CircularView
              color={item}
              borderColor={borderColor(item)}
              onPress={handleColorClick}
            />
          </View>
        )}
        style={{marginVertical: 5}}
      />
    );
  };

  //=========Return method to load UI
  return (
    <View style={styles.container}>
      <ColorList data={Constants.colorList1} />
      <ColorList data={Constants.colorList2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  border: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomStartRadius: 4,
  },
  text: {
    height: 30,
    padding: 4,
    textAlignVertical: 'center',
  },
  options: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default ColorPicker;
