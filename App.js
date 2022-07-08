import { Button, StyleSheet, Text, View } from 'react-native';

import LogIn from './components/login';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola gente!</Text>
      <Button title='Add' onPress={() => { }} />
      <StatusBar style="auto" />
      <LogIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },


});
