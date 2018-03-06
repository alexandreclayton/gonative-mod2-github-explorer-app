import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
// Pages
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';
// Components
import HeaderRight from 'components/HeaderRight';
// Styles
import { metrics } from 'styles';

const createNavigator = (isLogged = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }),
    },
  }, {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  });

export default createNavigator;
