import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import CircularView from './CircularView';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../utils/Constants';
import ResultComponent from './ResultComponent';

const OptionsRow = ({row}) => {
  // ======Redux data management===========
  const dispatch = useDispatch();

  const {
    colorBoxOne,
    colorBoxTwo,
    colorBoxThree,
    colorBoxFour,
    answerBoxOne,
    answerBoxTwo,
    answerBoxThree,
    answerBoxFour,
  } = useSelector((state) => {
    switch (row) {
      case 1:
        return state.colorRow1;
      case 2:
        return state.colorRow2;
      case 3:
        return state.colorRow3;
      case 4:
        return state.colorRow4;
      case 5:
        return state.colorRow5;
      case 6:
        return state.colorRow6;
      case 7:
        return state.colorRow7;
      case 8:
        return state.colorRow8;
      case 9:
        return state.colorRow9;
      case 10:
        return state.colorRow10;
    }
  });

  // ======Click events====================
  const handleOptionClick = (position) => {
    dispatch({type: Constants.FILL_COLOR, payload: {row: row, box: position}});
  };

  const handleCheckButtonClick = () => {
    if (
      colorBoxOne === 'white' ||
      colorBoxTwo === 'white' ||
      colorBoxThree === 'white' ||
      colorBoxFour === 'white'
    ) {
      showAlert();
    } else dispatch({type: Constants.CHECK_ANSWER, payload: row});
  };

  const showAlert = () => {
    Alert.alert(
      'Row is empty!!',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };

  // ======In File View Component===========

  const OptionsView = () => {
    return (
      <>
        <CircularView
          color={colorBoxOne}
          onPress={() => handleOptionClick(1)}
        />
        <CircularView
          color={colorBoxTwo}
          onPress={() => handleOptionClick(2)}
        />
        <CircularView
          color={colorBoxThree}
          onPress={() => handleOptionClick(3)}
        />
        <CircularView
          color={colorBoxFour}
          onPress={() => handleOptionClick(4)}
        />
      </>
    );
  };

  const CheckButton = () => {
    return (
      <TouchableOpacity onPress={handleCheckButtonClick}>
        <Text style={styles.text}>Check</Text>
      </TouchableOpacity>
    );
  };

  const ResultDots = () => {
    return (
      <View style={styles.resultDots}>
        <ResultComponent backgroundColor={answerBoxOne} />
        <ResultComponent backgroundColor={answerBoxTwo} />
        <ResultComponent backgroundColor={answerBoxThree} />
        <ResultComponent backgroundColor={answerBoxFour} />
      </View>
    );
  };

  //=======Final returned view===============
  return (
    <View style={styles.options}>
      <OptionsView />
      <CheckButton />
      <ResultDots />
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  colorView: {
    paddingHorizontal: 10,
  },
  resultDots: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default OptionsRow;
