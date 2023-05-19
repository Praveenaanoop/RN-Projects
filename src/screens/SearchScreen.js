import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/Searchbar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchapi, results, errorMessage] = useResults();
  //console.log(results);
  const filterResultsbyprice = id => {
    return results.filter(results => {
      return results.id == id;
    });
  };

  return (
    <>
      {/* when we use multiple elements use this instaed of view */}
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchapi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsbyprice(1)}
          title="Manager"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsbyprice(2)}
          title="Assistant Manager"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsbyprice(3)}
          title="Director"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
