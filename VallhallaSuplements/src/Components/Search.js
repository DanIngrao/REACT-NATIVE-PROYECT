import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const Search = ({onSearch}) => {
  
  const [input, setInput] = useState("");
  const search = ()=>{
    onSearch(input)
  }
  const removeInput = ()=>{
    setInput("")
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder='Search product...'
      />
      <Pressable onPress={search}>
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={removeInput}>
        <MaterialIcons name="cancel" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'90%',
    padding: 10
  },
  input:{
    backgroundColor: colors.blue2,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width:'80%',
    fontSize: 20
  }
})