import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ avatar, firstName, lastName, email }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.lastName}>{lastName}</Text> {firstName}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
  },
  lastName: {
    fontWeight: 'bold',
  },
  email: {
    color: '#555',
    marginTop: 4,
  },
});

export default UserCard;
