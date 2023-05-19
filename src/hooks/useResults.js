import {useEffect, useState} from 'react';
import jsonplaceholder from '../api/jsonplaceholder';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchapi = async searchTerm => {
    try {
      const response = await jsonplaceholder.get('/photos', {
        params: {
          limit: 20,
          term: searchTerm,
        },
      });
      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchapi('james');
  }, []);

  return [searchapi, results, errorMessage];
};
