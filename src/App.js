import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Stack, Scene, Router, ActionConst, Actions } from 'react-native-router-flux'
import * as WebService from './webservice';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import { Characters, CharacterDetail, Initial } from './sections';
import * as colors from './commons/colors';

export default class App extends Component {
  constructor(props) {
    super(props)
    WebService.configure();
    StatusBar.setBarStyle('light-content', false);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={'root'}>
            <Scene 
              initial
              key={'Initial'}
              component={Initial}
              hideNavBar={true}
            />
            <Scene 
              key={'Characters'}
              component={Characters}
              hideNavBar={true}
            />
            <Scene 
              key={'CharacterDetail'}
              component={CharacterDetail}
              {...navBarStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const navBarStyles = {
  navTransparent: true,
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
};