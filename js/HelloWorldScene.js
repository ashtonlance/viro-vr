'use strict';

import React, {Component} from 'react';

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
        return {text: "Ruby Falls"};
    },
    render: function() {
        return (
            <ViroScene>
                <Viro360Image source={require('./res/360_space.jpg')} />
                <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -4]} style={styles.helloWorldTextStyle} />
                
                <ViroAnimatedComponent animation='animateImageReverse' loop={true} run={true}>
                    <ViroBox position={[-1.25, -2, -4.5]} width={.5} height={.5} length={.5} scale={[2, 2, 2]} materials={["grid"]} onTouch={this._showMontage} onClick={this._showMontage} />
                </ViroAnimatedComponent>
                <ViroAnimatedComponent animation='animateImage' loop={true} run={true}>
                    <ViroBox position={[3.5, -2, -3]} width={.5} height={.5} length={.5} scale={[2, 2, 2]} materials={["rubyFalls"]} onTouch={this._showRubyFalls} onClick={this._showRubyFalls} />
                </ViroAnimatedComponent>
                
            </ViroScene>
        );
    },

    _onBoxHover(isHovering) {
        let text = isHovering
            ? "Hello Box!"
            : "Hello World!";
        this.setState({text});
    },

    _showRubyFalls() {

        // this.setTimeout(() => {
            this.props.sceneNavigator.push({scene: require("./RubyFalls.js")});
        // }, 2500);
    },

    _showMontage() {
        // this.setTimeout(() => {
            this.props.sceneNavigator.push({scene: require("./VIPMontage.js")});
        // }, 2500);
    }
});

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 35,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'
    }
});

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/btn_white.png')
    },
    rubyFalls: {
        diffuseTexture: require('./res/RF-Logo.jpg')
    }
});

ViroAnimations.registerAnimations({
    animateImage: {
        properties: {
            rotateY: "+=45"
        },
        duration: 1000
    },

    animateImageReverse: {
        properties: {
            rotateY: "-=45"
        },
        duration: 1000
    }
});

module.exports = HelloWorldScene;
