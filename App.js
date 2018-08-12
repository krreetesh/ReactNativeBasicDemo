import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MainScreen from './src/MainScreen';
import PropsDemo from './src/PropsDemo';
import StateDemo from './src/StateDemo';
import StyleDemo from './src/StyleDemo';
import DimensionDemo from './src/DimensionDemo';
import FlexboxLayoutDemo from './src/FlexboxLayoutDemo';
import TextInputDemo from './src/TextInputDemo';
import ButtonDemo from './src/ButtonDemo';
import ScrollViewDemo from './src/ScrollViewDemo';
import ListViewDemo from './src/ListViewDemo';
import NetworkRequestDemo from './src/NetworkRequestDemo';

const App = () => {
  return (
          <Router>
          <Scene key="root">
          <Scene key="main"
          component={MainScreen}
          title="Main Screen"
          initial
          />
          <Scene
          key="myProps"
          component={PropsDemo}
          title="Props Demo"
          />
          <Scene
          key="myState"
          component={StateDemo}
          title="State Demo"
          />
          <Scene
          key="myStyle"
          component={StyleDemo}
          title="Style Demo"
          />
          <Scene
          key="myDimension"
          component={DimensionDemo}
          title="Dimension Demo"
          />
          <Scene
          key="myFlexbox"
          component={FlexboxLayoutDemo}
          title="Flexbox Layout Demo"
          />
          <Scene
          key="myTextInput"
          component={TextInputDemo}
          title="TextInput Demo"
          />
          <Scene
          key="myButton"
          component={ButtonDemo}
          title="Button Demo"
          />
          <Scene
          key="myScrollView"
          component={ScrollViewDemo}
          title="ScrollView Demo"
          />
          <Scene
          key="myListView"
          component={ListViewDemo}
          title="ListView Demo"
          />
          <Scene
          key="myNetworkRequest"
          component={NetworkRequestDemo}
          title="Network Request Demo"
          />
          </Scene>
          </Router>
          );
}

export default App;

