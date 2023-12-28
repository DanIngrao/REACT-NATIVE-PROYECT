import { StyleSheet } from 'react-native';
import { colors } from './src/Global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './assets/Fonts/fonts';
import TabNavigator from './src/Navigation/TabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){return null}

  return (
    <>
      <TabNavigator/>
    </>
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
