import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { assignLevel } from '../actions';

class LevelButton extends React.Component {
  onPress(num){
    console.log(this.props);
    this.props.assignLevel(num);
  }

  render(){
    const num = this.props.num;
    const onPress = this.onPress.bind(this, num);

    return (
      <TouchableOpacity style={styles.level} key={num} onPress={onPress}>
        <Text style={styles.text}>
          {num}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  level: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderColor: 'white',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
};

export default connect(null, { assignLevel })(LevelButton);
