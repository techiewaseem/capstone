import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

const dummySuggestions = [
  'Doha',
  'Doha Corniche',
  'Doha West Bay',
  'Doha Industrial Area',
  'Doha Education City',
  'Al Wakrah',
  'Lusail',
  'Al Rayyan',
  'Al Khor',
  'Umm Salal',
  'Al Shamal',
  'Al Daayen',
  'Mesaieed',
  'Al Shahaniya'
];

const SearchBar = ({ placeholder, onSelectSuggestion }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (text) => {
    setQuery(text);
    if (text.length > 0) {
      const filtered = dummySuggestions.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={query}
        onChangeText={handleChange}
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)} style={styles.suggestionItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  input: {
    fontSize: 16,
  },
  suggestionList: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 150,
  },
  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default SearchBar;
