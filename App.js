import { Button, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

export default function App() {

  return (
    <View>
      <ToDoList />
    </View>
  );
}

