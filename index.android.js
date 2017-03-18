//Import some lib we needs
// var React = require('react-native');
import React from 'react'; // npm install --save moment
import Moment from 'moment';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import DayItems from './src/day-item';

//Create react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      { this.days() }
    </View>
  },
  days: function(){
    var dayItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i,'day').format('dddd');
      dayItems.push(
        <DayItems day={day} key={i} daysUnits={i} />
      )//end push in array
    }//end for loop
    return dayItems;
  }//end days function

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
