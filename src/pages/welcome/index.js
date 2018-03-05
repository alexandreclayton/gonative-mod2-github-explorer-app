import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// StatusBar.setBarStyle("light-content");

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  singIn = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar, precisamos que você informe seu usuário do Github
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
          <TouchableOpacity style={styles.button} onPress={this.singIn} >
            <Text style={styles.buttonText}>Prossegir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
