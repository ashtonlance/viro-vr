'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

var TimerMixin = require('react-timer-mixin');

import {
  ViroScene,
  Viro360Image,
  Viro360Video,
  ViroBox,
  ViroMaterials,
  ViroCamera,
} from 'react-viro';

var HelloBeachScene = React.createClass({
  mixins: [TimerMixin],
  getInitialState() {
    return {
    };
  },
  render: function() {
    return (
     <ViroScene>
     <ViroCamera position={[0, 0, 0]} active={true} />
     <Viro360Video
       source={require("./video/CMC-360_0036_TEST-Title-InsetVideo-1920x960_EDITED_03-23-17.mp4")}
       onFinish={this._onFinish}
       loop={true}
       />
       <ViroBox position={[-4, -4, -2]} width={.5} height={.5} length={.5} scale={[1,1,1]} materials={["spacebox"]} onHover={this._showHelloWorldScene}/>
     </ViroScene>


    );
  },

  _showHelloWorldScene() {
    this.setTimeout(
    () => {this.props.sceneNavigator.push({scene:require("./HelloWorldScene.js")}); },
   2000
   );
  },

});

ViroMaterials.createMaterials({
  spacebox: {
    diffuseTexture: require('./res/360_space.jpg'),
  },
});

module.exports = HelloBeachScene;
