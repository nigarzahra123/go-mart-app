import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.replace('Main');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/logo.png')} // Update path to your logo
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Login</Text>
      
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      
      <Button 
        title="Login" 
        onPress={handleLogin} 
        disabled={!username || !password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: { 
    fontSize: 24, 
    textAlign: 'center', 
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: { 
    borderWidth: 1, 
    marginBottom: 15, 
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
  },
});