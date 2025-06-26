import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SavedScreen() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('saved').then(data => {
      if (data) setSaved(JSON.parse(data));
    });
  }, []);

  return (
    <FlatList
      data={saved}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text style={{ fontSize: 18, padding: 10 }}>{item.title}</Text>}
    />
  );
}