'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

var TimerMixin = require('react-timer-mixin');

import {
  ViroScene,
  ViroText,
  Viro360Image,
  Viro360Video,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  ViroAnimatedComponent,
} from 'react-viro';

var HelloWorldScene = React.createClass({
  mixins: [TimerMixin],
  getInitialState() {
    return {
      text:"Hover over box for 2 seconds to launch video",
    };
  },
  render: function() {
    return (
     <ViroScene>
      <Viro360Image source={require('./res/360_space.jpg')} />
        <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
        <ViroAnimatedComponent animation='animateImage' loop={true} run={true}>
          <ViroBox position={[0, -2, -3]} width={.5} height={.5} length={.5} scale={[2,2,2]} materials={["grid"]}
         onHover={this._showHelloBeachScene}/>
         </ViroAnimatedComponent>

     </ViroScene>
    );
  },

  _onBoxHover(isHovering) {
   let text = isHovering ? "Hello Box!" : "Hello World!";
   this.setState({
     text
   });
  },

 _showHelloBeachScene() {
   this.setTimeout(
     () => {this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")}); },
    2000
    );
  },

  // componentDidMount() {
  //   this.setTimeout(
  //     () => { console.log('I do not leak!'); },
  //     500
  //   );
  // },
});


var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 35,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/guadalupe_360.jpg'),
  },
});

ViroAnimations.registerAnimations({
    animateImage:{properties:{rotateY:"+=50"}, duration:500},
});

module.exports = HelloWorldScene;
