'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  Viro360Video,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

var HelloWorldScene = React.createClass({
  getInitialState() {
    return {
      text:"Hello World!",
    };
  },
  render: function() {
    return (
     <ViroScene>

      <Viro360Image source={require('./res/360_space.jpg')} />
        <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
        <ViroBox position={[0, -1, -2]} width={.5} height={.5} length={.5} scale={[1,1,1]} materials={["grid"]} onHover={this._showHelloBeachScene} onClick={this._showHelloBeachScene}/>

     </ViroScene>
    );
  },

  _onBoxHover(isHovering) {
   let text = isHovering ? "Hello Box!" : "Hello World!";
   this.setState({
     text
   });
  // if(isHovering) {
  //     console.log("We are hovering onto the image!");
  //     this.setState({
  //       "Hello World!"
  //     })
  //   }else{
  //     console.log("We are not longer hovering on the image!");
  //   }
  },

 _showHelloBeachScene() {
    this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")});
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
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

module.exports = HelloWorldScene;
