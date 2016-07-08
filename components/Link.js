/**
 * Created by wangchenlong on 16/4/29.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ListView,
  View,
   Image,
  TouchableHighlight,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
  Linking
} from 'react-native';

var StoryDetail = require('./StoryDetail.js');
var moment = require('moment');

class Link extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  pressedURL() {
    console.log('hi', this.props.url)

    // 跳转链接
    Linking.openURL(this.props.url)
  }

  render() {

    return (
      <Text style={styles.hyperlink}
            onPress={this.pressedURL.bind(this)}>
        {this.props.children}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  hyperlink: {
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

module.exports = Link;