//Import some lib we needs
// var React = require('react-native');
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';

//Create react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of Weeks
      </Text>
    </View>
  }
});

//Style react component

var styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center position of screen verticle (height)
    // justifyContent: 'flex-end', // center at the end of screen
    // alignItems: 'flex-start',
    // flexDirection: 'row',
    alignItems: 'center',
  }
});


// Show react component
AppRegistry.registerComponent('weekdays',function() {
  return Weekdays
});

//Show react component on the screen
