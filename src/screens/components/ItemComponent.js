import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ItemComponent ({words}) {
    return (
      <View style={styles.wordsList}>
        {words.map((word, index) => {
          return (
            <View key={index}>
              <Text style={styles.wordtext}>{word.name}</Text>
            </View>
          );
        })}
      </View>
    );
 }

const styles = StyleSheet.create({
  wordsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  wordtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});