import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.singOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
