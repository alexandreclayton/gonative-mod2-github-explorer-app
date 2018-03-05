import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import styles from './styles';

// StatusBar.setBarStyle("light-content");

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>Para continuar, precisamos que você informe seu usuário do Github</Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineColorAndroid="rgba(0,0,0,0)"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Prossegir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
