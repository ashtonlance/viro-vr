/**
 * Copyright (c) 2016-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroBox,
} from 'react-viro';

var InitialScene = require('./js/HelloWorldScene');

export default class ViroSample extends Component {
  render() {
    return (
      <ViroSceneNavigator apiKey="9782BD73-E740-4A78-8495-C4F4F0B01F3F"
       initialScene={{scene: InitialScene}}
        />
    );
  }
}

AppRegistry.registerComponent('ViroSample', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);