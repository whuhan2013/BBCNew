/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Feed from './components/Feed.js';

class BBCNew extends Component {
  render() {
    let defaultName='Feed';
      let defaultComponent=Feed;
    return (
<Navigator
            initialRoute={{ name: defaultName,
             component: defaultComponent,
             index: 0 
            }}
            //配置场景
            configureScene=
                {
            (route) => {

//这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-//native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }
          }
            renderScene={
            (route, navigator) =>
             {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} 
                    route={route}
              // Function to call when a new scene should be displayed           
            />
          }
          } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('BBCNew', () => BBCNew);
