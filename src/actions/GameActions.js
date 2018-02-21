// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TAP_LETTER, START_NEW_WORD,
  VERIFY_WORD, END_ROUND }
from './types';

export const startNewWord = ({ numWords, activeLetters, answers }) => {
  return {
    type: START_NEW_WORD,
    numWords,
    activeLetters,
    answers
  };
};

export const tapLetter = (letter, letterIndex) => {
  return {
    type: TAP_LETTER,
    letter,
    letterIndex
  };
};

export const verifyWord = (letter, letterIndex) => {
  return {
    type: VERIFY_WORD,
    letter,
    letterIndex
  }
}


export const endRound = () => {
  Actions.levels();

  return {
    type: END_ROUND
  }
}
