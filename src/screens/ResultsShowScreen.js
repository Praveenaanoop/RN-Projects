import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import jsonplaceholder from '../api/jsonplaceholder';

const ResultsShowScreen = ({navigation, route}) => {
  const [results, setResults] = useState(null);
  const id = route.params.id;

  const getResults = async id => {
    const response = await jsonplaceholder.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!results) {
    return null;
  }
  // console.log(results);
  else {
    return (
      <View>
        <Text>{results.id}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
