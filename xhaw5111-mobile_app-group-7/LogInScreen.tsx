import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace the login screen with the main tab navigator (Home and Courses)
    navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#ffffff"
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#ffffff"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#A52A2A', padding: 16 },
  input: { width: '80%', padding: 12, marginVertical: 10, backgroundColor: '#5C2B2E', color: '#ffffff', borderRadius: 8 },
  button: { width: '80%', padding: 12, marginVertical: 10, backgroundColor: '#ffffff', borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#A52A2A', fontWeight: 'bold' },
});

export default LoginScreen;

