import { StyleSheet } from 'react-native';
import { colors } from './src/Global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './assets/Fonts/fonts';
import { Provider } from 'react-redux';
import TabNavigator from './src/Navigation/TabNavigator';
import store from './src/Store/store';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){return null}

  return (
    <Provider store={store}>
      <TabNavigator/>
    </Provider>
    
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
