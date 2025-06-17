import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import UserCard from './components/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              avatar={item.avatar}
              firstName={item.first_name}
              lastName={item.last_name}
              email={item.email}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default UserList;
