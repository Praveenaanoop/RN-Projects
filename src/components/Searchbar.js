import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundstyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputstyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundstyle: {
    backgroundColor: '#CBC7C7',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  inputstyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    fontSize: 17,
  },
});

export default SearchBar;
