import { Actions } from 'react-native-router-flux';
import { ASSIGN_LEVEL } from './types';

export const assignLevel = (nextLevel, levelType) => {
  Actions.game();

  return {
    type: ASSIGN_LEVEL,
    nextLevel,
    levelType
  };
};
