import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'services/api';
import RepositoryItem from './components/RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
  }

  async componentDidMount() {
    await this.loadRepositories();
  }

  loadRepositories = async () => {
    const username = await AsyncStorage.getItem('@Github:username');
    const response = await api.get(`/users/${username}/repos`);
    this.setState({ data: response.data, loading: false });
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()}
      </View>
    );
  }
}
