import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  renderArticles = () => {
    return (
      <div>Hello</div>
    )
  }

  render() {
    return (
      <Text>Home Screen</Text>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: '100%',
  },
});

export default Home;
