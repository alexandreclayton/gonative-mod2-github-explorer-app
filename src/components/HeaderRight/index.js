import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class HeaderRight extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.singOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}
