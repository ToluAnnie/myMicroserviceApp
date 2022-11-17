import React from 'react';
import {Button, View, Text } from 'react-native';

export default function Home({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Add a word"
          onPress={() => navigation.navigate('AddWord')}
        />
        <Button
          title="List of Words"
          color="green"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    );
}