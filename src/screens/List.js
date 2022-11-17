import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import database from '@react-native-firebase/database';

let wordsRef = database().ref('/words');

export default function List() {
  const [wordsArray, setWordsArray] = React.useState([]);
  React.useEffect(() => {
    wordsRef.on('value', snapshot => {
      let data = snapshot.val();
      const words = Object.values(data);
      setWordsArray(words);
    });
  }, []);
  return (
    <View style={styles.container}>
      {wordsArray.length > 0 ? (
        <ItemComponent words={wordsArray} />
      ) : (
        <Text>No words</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});
