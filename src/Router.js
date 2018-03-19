import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Game from './components/Game';
import LevelsPage from './components/LevelsPage';
import RoundReview from './components/RoundReview';
import AdvanceStage from './components/AdvanceStage';
import MenuPage from './components/MenuPage';
import ExtraInfo from './components/ExtraInfo';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" tabs={false}>
        <Scene initial key="login" component={LoginForm} title="" />
        <Scene key="levels" component={LevelsPage} title="Levels" />
        <Scene key="game" component={Game} title="Game On" />
        <Scene key="roundReview" component={RoundReview} title="Round Review" />
        <Scene key="advanceStage" component={AdvanceStage} title="Advance Stage" />
        <Scene key="menuPage" component={MenuPage} title="Menu" />
        <Scene key="extraInfo" component={ExtraInfo} title="Learn More" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
