
import React from 'react';

import{
  Text,
  StyleSheet,
} from 'react-native';

//create our Component

var DayItems = React.createClass({
  render: function(){
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function(){
    return {
      color: this.color(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight(),
    }
  },
  color: function(){
    var opacity = 1 / (this.props.daysUnits+1);
    return 'rgba(0,0,0,'+opacity+')';
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUnits;
  },
  lineHeight: function(){
    return 70 - 4 * this.props.daysUnits;
  }
});

var styles = StyleSheet.create({
  day: {
    color: '#0000FF',
    fontSize: 18,
  }
});

module.exports = DayItems;
