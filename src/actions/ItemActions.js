import firebase from 'firebase';
import {
  MAKE_PURCHASE, SHAKE_IT_UP,
  SHOW_ITEM_DESCRIPTION, SEE_A_LETTER
} from './types';
import merge from 'lodash/merge';

export const makePurchase = ({ item, cost, itemsToggle }) => {
  const { currentUser } = firebase.auth();
  itemsToggle[item] = true;

  firebase.database().ref(`/gameInfo/${currentUser.uid}`)
    .update({
      itemsToggle
    })

  return {
    type: MAKE_PURCHASE,
    item,
    cost
  }
}

export const showItemDescription = (message) => {
  return {
    type: SHOW_ITEM_DESCRIPTION,
    message
  }
}

export const shakeItUp = ({ itemsToggle, levelType, item }) => {
  const { currentUser } = firebase.auth();
  const newToggle = merge({}, itemsToggle);
  newToggle[item] = false;

  firebase.database().ref(`/gameInfo/${currentUser.uid}`)
    .update({  itemsToggle: newToggle })

  return {
    type: SHAKE_IT_UP,
    itemsToggle,
    levelType,
    item
  }
}

export const seeALetter = () => {

  return {
    type: SEE_A_LETTER
  }
}
