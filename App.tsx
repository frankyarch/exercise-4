import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import Title from './components/Title';
import TextInputField from './components/TextInput';
import Button from './components/Button';

const App = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log({
      name,
      username,
      email,
      address,
      phone,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.container}>
        <Title text="Registration" />
        <TextInputField label="Name" placeholder="Masukan nama lengkap anda" value={name} onChangeText={setName} />
        <TextInputField label="Username" placeholder="Masukan username anda" value={username} onChangeText={setUsername} />
        <TextInputField label="Email" placeholder="Masukan email anda" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInputField label="Address" placeholder="Masukan alamat anda" value={address} onChangeText={setAddress} />
        <TextInputField label="Phone Number" placeholder="Masukan Nomor telepon anda" value={phone} onChangeText={setPhone} keyboardType="numeric" />
        <Button text="Register" onPress={handleRegister} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
