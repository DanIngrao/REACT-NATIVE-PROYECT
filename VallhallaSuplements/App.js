import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/Global/colors';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './assets/Fonts/fonts';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){return null}

  return (
    <Navigator/>
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
