import Constants from '../utils/Constants';

const initialState = {
  selectedColor: '',
  showWinAlert: false,
  answerColors: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
  },
  colorRow1: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow2: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow3: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow4: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow5: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow6: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow7: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow8: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow9: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
  colorRow10: {
    colorBoxOne: 'white',
    colorBoxTwo: 'white',
    colorBoxThree: 'white',
    colorBoxFour: 'white',
    answerBoxOne: 'white',
    answerBoxTwo: 'white',
    answerBoxThree: 'white',
    answerBoxFour: 'white',
  },
};

export const reducer = (state = initialState, action) => {
  if (action.type === Constants.SET_ANSWER_COLORS) {
    return {
      ...state,
      answerColors: action.payload,
    };
  } else if (action.type === Constants.SELECTED_COLOR) {
    return {
      ...state,
      selectedColor: action.payload,
    };
  } else if (action.type === Constants.FILL_COLOR) {
    switch (action.payload.row) {
      case 1:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow1: {
              ...state.colorRow1,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow1: {
              ...state.colorRow1,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow1: {
              ...state.colorRow1,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow1: {
              ...state.colorRow1,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 2:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow2: {
              ...state.colorRow2,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow2: {
              ...state.colorRow2,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow2: {
              ...state.colorRow2,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow2: {
              ...state.colorRow2,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 3:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow3: {
              ...state.colorRow3,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow3: {
              ...state.colorRow3,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow3: {
              ...state.colorRow3,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow3: {
              ...state.colorRow3,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 4:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow4: {
              ...state.colorRow4,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow4: {
              ...state.colorRow4,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow4: {
              ...state.colorRow4,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow4: {
              ...state.colorRow4,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 5:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow5: {
              ...state.colorRow5,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow5: {
              ...state.colorRow5,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow5: {
              ...state.colorRow5,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow5: {
              ...state.colorRow5,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 6:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow6: {
              ...state.colorRow6,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow6: {
              ...state.colorRow6,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow6: {
              ...state.colorRow6,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow6: {
              ...state.colorRow6,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 7:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow7: {
              ...state.colorRow7,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow7: {
              ...state.colorRow7,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow7: {
              ...state.colorRow7,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow7: {
              ...state.colorRow7,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 8:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow8: {
              ...state.colorRow8,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow8: {
              ...state.colorRow8,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow8: {
              ...state.colorRow8,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow8: {
              ...state.colorRow8,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 9:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow9: {
              ...state.colorRow9,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow9: {
              ...state.colorRow9,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow9: {
              ...state.colorRow9,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow9: {
              ...state.colorRow9,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      case 10:
        if (action.payload.box === 1) {
          return {
            ...state,
            colorRow10: {
              ...state.colorRow10,
              colorBoxOne: state.selectedColor,
            },
          };
        } else if (action.payload.box === 2) {
          return {
            ...state,
            colorRow10: {
              ...state.colorRow10,
              colorBoxTwo: state.selectedColor,
            },
          };
        } else if (action.payload.box === 3) {
          return {
            ...state,
            colorRow10: {
              ...state.colorRow10,
              colorBoxThree: state.selectedColor,
            },
          };
        } else {
          return {
            ...state,
            colorRow10: {
              ...state.colorRow10,
              colorBoxFour: state.selectedColor,
            },
          };
        }
      default:
        return state;
    }
  } else if (action.type === Constants.CHECK_ANSWER) {
    let winAlert;
    switch (action.payload) {
      case 1:
        let mColor1 = getColor(state.answerColors, state.colorRow1);
        winAlert = showWinAlerts(mColor1);
        // console.log('reducer (1) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow1: {
            ...state.colorRow1,
            answerBoxOne: mColor1.color1,
            answerBoxTwo: mColor1.color2,
            answerBoxThree: mColor1.color3,
            answerBoxFour: mColor1.color4,
          },
        };

      case 2:
        let mColor2 = getColor(state.answerColors, state.colorRow2);
        winAlert = showWinAlerts(mColor2);
        // console.log('reducer (2) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow2: {
            ...state.colorRow2,
            answerBoxOne: mColor2.color1,
            answerBoxTwo: mColor2.color2,
            answerBoxThree: mColor2.color3,
            answerBoxFour: mColor2.color4,
          },
        };

      case 3:
        let mColor3 = getColor(state.answerColors, state.colorRow3);
        winAlert = showWinAlerts(mColor3);
        // console.log('reducer (3) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow3: {
            ...state.colorRow3,
            answerBoxOne: mColor3.color1,
            answerBoxTwo: mColor3.color2,
            answerBoxThree: mColor3.color3,
            answerBoxFour: mColor3.color4,
          },
        };

      case 4:
        let mColor4 = getColor(state.answerColors, state.colorRow4);
        winAlert = showWinAlerts(mColor4);
        // console.log('reducer (4) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow4: {
            ...state.colorRow4,
            answerBoxOne: mColor4.color1,
            answerBoxTwo: mColor4.color2,
            answerBoxThree: mColor4.color3,
            answerBoxFour: mColor4.color4,
          },
        };

      case 5:
        let mColor5 = getColor(state.answerColors, state.colorRow5);
        winAlert = showWinAlerts(mColor5);
        // console.log('reducer (5) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow5: {
            ...state.colorRow5,
            answerBoxOne: mColor5.color1,
            answerBoxTwo: mColor5.color2,
            answerBoxThree: mColor5.color3,
            answerBoxFour: mColor5.color4,
          },
        };

      case 6:
        let mColor6 = getColor(state.answerColors, state.colorRow6);
        winAlert = showWinAlerts(mColor6);
        // console.log('reducer (6) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow6: {
            ...state.colorRow6,
            answerBoxOne: mColor6.color1,
            answerBoxTwo: mColor6.color2,
            answerBoxThree: mColor6.color3,
            answerBoxFour: mColor6.color4,
          },
        };

      case 7:
        let mColor7 = getColor(state.answerColors, state.colorRow7);
        winAlert = showWinAlerts(mColor7);
        // console.log('reducer (7) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow7: {
            ...state.colorRow7,
            answerBoxOne: mColor7.color1,
            answerBoxTwo: mColor7.color2,
            answerBoxThree: mColor7.color3,
            answerBoxFour: mColor7.color4,
          },
        };

      case 8:
        let mColor8 = getColor(state.answerColors, state.colorRow8);
        winAlert = showWinAlerts(mColor8);
        // console.log('reducer (8) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow8: {
            ...state.colorRow8,
            answerBoxOne: mColor8.color1,
            answerBoxTwo: mColor8.color2,
            answerBoxThree: mColor8.color3,
            answerBoxFour: mColor8.color4,
          },
        };

      case 9:
        let mColor9 = getColor(state.answerColors, state.colorRow9);
        winAlert = showWinAlerts(mColor9);
        // console.log('reducer (9) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow9: {
            ...state.colorRow9,
            answerBoxOne: mColor9.color1,
            answerBoxTwo: mColor9.color2,
            answerBoxThree: mColor9.color3,
            answerBoxFour: mColor9.color4,
          },
        };

      case 10:
        const mColor10 = getColor(state.answerColors, state.colorRow10);
        winAlert = showWinAlerts(mColor10);
        // console.log('reducer (10) winAlert: ' + winAlert);
        return {
          ...state,
          showWinAlert: winAlert,
          colorRow10: {
            ...state.colorRow10,
            answerBoxOne: mColor10.color1,
            answerBoxTwo: mColor10.color2,
            answerBoxThree: mColor10.color3,
            answerBoxFour: mColor10.color4,
          },
        };
    }
  } else if (action.type === Constants.RESET) {
    return {
      ...state,
      showWinAlert: false,
    };
  }
  return state;
};

const showWinAlerts = (mColorObj) => {
  let mColor1 = mColorObj.color1;
  let mColor2 = mColorObj.color2;
  let mColor3 = mColorObj.color3;
  let mColor4 = mColorObj.color4;
  let showUserWonAlert = false;
  if (
    mColor1 === 'red' &&
    mColor2 === 'red' &&
    mColor3 === 'red' &&
    mColor4 === 'red'
  ) {
    showUserWonAlert = true;
  }

  return showUserWonAlert;
};

const getColor = (answerColors, colorRow) => {
  let color1;
  let color2;
  let color3;
  let color4;

  if (
    colorRow.colorBoxOne === 'white' &&
    colorRow.colorBoxTwo === 'white' &&
    colorRow.colorBoxThree === 'white' &&
    colorRow.colorBoxFour === 'white'
  ) {
    color1 = 'white';
    color2 = 'white';
    color3 = 'white';
    color4 = 'white';
  } else {
    if (answerColors.colorBoxOne === colorRow.colorBoxOne) color1 = 'red';
    else {
      if (
        answerColors.colorBoxOne === colorRow.colorBoxTwo ||
        answerColors.colorBoxOne === colorRow.colorBoxThree ||
        answerColors.colorBoxOne === colorRow.colorBoxFour
      ) {
        color1 = 'white';
      } else {
        color1 = 'grey';
      }
    }

    if (answerColors.colorBoxTwo === colorRow.colorBoxTwo) color2 = 'red';
    else {
      if (
        answerColors.colorBoxTwo === colorRow.colorBoxThree ||
        answerColors.colorBoxTwo === colorRow.colorBoxFour ||
        answerColors.colorBoxTwo === colorRow.colorBoxOne
      ) {
        color2 = 'white';
      } else {
        color2 = 'grey';
      }
    }

    if (answerColors.colorBoxThree === colorRow.colorBoxThree) color3 = 'red';
    else {
      if (
        answerColors.colorBoxThree === colorRow.colorBoxTwo ||
        answerColors.colorBoxThree === colorRow.colorBoxFour ||
        answerColors.colorBoxThree === colorRow.colorBoxOne
      ) {
        color3 = 'white';
      } else {
        color3 = 'grey';
      }
    }

    if (answerColors.colorBoxFour === colorRow.colorBoxFour) color4 = 'red';
    else {
      if (
        answerColors.colorBoxFour === colorRow.colorBoxThree ||
        answerColors.colorBoxFour === colorRow.colorBoxTwo ||
        answerColors.colorBoxFour === colorRow.colorBoxOne
      ) {
        color4 = 'white';
      } else {
        color4 = 'grey';
      }
    }
  }
  let mColor = {color1, color2, color3, color4};
  return mColor;
};
