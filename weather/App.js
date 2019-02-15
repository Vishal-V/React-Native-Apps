import React from 'react';
import { Text, View, StyleSheet } from 'react-native' ;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Render temporary!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
})