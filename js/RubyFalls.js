'use strict';

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

var TimerMixin = require('react-timer-mixin');

import {
    ViroScene,
    Viro360Image,
    Viro360Video,
    ViroBox,
    ViroMaterials,
    ViroCamera,
    ViroSpinner
} from 'react-viro';

var RubyFalls = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return {
          showSpinner:true,
      };
    },

    render: function() {
        return (
            <ViroScene>
                <Viro360Video source={require("./video/RubyFalls.mp4")} loop={true} onUpdateTime={this._onUpdateTime} />

                <ViroBox position={[-4, -4, -2]} width={.5} height={.5} length={.5} scale={[1, 1, 1]} materials={["spacebox"]} onTouch={this._showHelloWorldScene} onClick={this._showHelloWorldScene} />

                <ViroSpinner visible={this.state.showSpinner} type='light' position={[0, 0, -2]} />
            </ViroScene>

        );
    },

    _showHelloWorldScene() {
            this.props.sceneNavigator.push({scene: require("./HelloWorldScene.js")});
    },

    _onUpdateTime() {
        this.setTimeout(() => {
          this.setState({
              showSpinner:false
          });
        }, 2000);
    },
});



ViroMaterials.createMaterials({
    spacebox: {
        diffuseTexture: require('./res/btnwhite.png')
    }
});

module.exports = RubyFalls;
