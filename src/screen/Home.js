import React, {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Alert, Image} from 'react-native';
import ColorPicker from '../components/ColorPicker';
import OptionsRow from '../components/OptionsRow';
import Constants from '../utils/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

function Home(props) {
  const dispatch = useDispatch();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const showWinAlert = useSelector((state) => state.showWinAlert);

  // ======== TO show win dialog ===========
  if (showWinAlert) {
    showDialog('You won', '', 'RESET');
  }

  //=======Handle button click===========
  function showDialog(title, subtitle, buttonText) {
    Alert.alert(
      title,
      subtitle,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: buttonText,
          onPress: () => {
            dispatch({type: Constants.RESET});
            RNRestart.Restart();
          },
        },
      ],
      {cancelable: false},
    );
  }

  //=======Setting Answer color object and storing into redux store
  const setAnswerColors = () => {
    let arr = [];
    while (arr.length < 4) {
      let r = Math.floor(Math.random() * 10);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log('numbers: ', arr);

    let answerColors = {
      colorBoxOne: Constants.colorList[arr[0]],
      colorBoxTwo: Constants.colorList[arr[1]],
      colorBoxThree: Constants.colorList[arr[2]],
      colorBoxFour: Constants.colorList[arr[3]],
    };
    console.log('AnswerColors: ', answerColors);
    dispatch({type: Constants.SET_ANSWER_COLORS, payload: answerColors});
  };

  useEffect(() => {
    setAnswerColors();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Play MasterMind</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => showDialog('Reset', 'Do you want to reset ?', 'OK')}>
            <Image
              source={require('../assets/reset.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ColorPicker />
      <FlatList
        data={data}
        keyExtractor={(item) => '' + item}
        renderItem={({item}) => {
          return <OptionsRow row={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    padding: 10,
    color: 'dodgerblue',
    fontSize: 17,
    width: '85%',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default Home;
