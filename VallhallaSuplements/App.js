import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/Global/colors';
import { useState } from 'react';
import ItemListCategories from './src/Screens/ItemListCategories';
import Home from './src/Screens/Home';

export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("")

  
  return (
    <View style={styles.container}>
      {categorySelected ? <ItemListCategories category={categorySelected} setCategorySelected={setCategorySelected}/>
      :
      <Home setCategorySelected={setCategorySelected}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
