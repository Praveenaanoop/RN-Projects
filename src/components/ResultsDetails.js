import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.url}} style={styles.imagestyle} />
      <Text style={styles.namestyle}>{result.title}</Text>
      <Text>
        Album id is {result.albumId} , AgainID is {result.id}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imagestyle: {width: 250, borderRadius: 5, height: 120},
  namestyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    margin: 10,
  },
});

export default ResultsDetails;
