import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageList from './components/MessageList/MessageList';

const App = () => {
  return (
    <View style={styles.container}>
      <MessageList/>
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;