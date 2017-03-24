'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  Viro360Image,
  Viro360Video,
} from 'react-viro';

var HelloBeachScene = React.createClass({
  getInitialState() {
    return {
    };
  },
  render: function() {
    return (
     <ViroScene onClick={this._showHelloWorldScene}>
     <Viro360Video
       source={require("./video/CMC-360_0036_TEST-1_EDITED_03-23-17.mp4")}
       onFinish={this._onFinish}
       loop={true}
       />
     </ViroScene>


    );
  },

  _showHelloWorldScene() {
    this.props.sceneNavigator.pop();
  },

});

module.exports = HelloBeachScene;
