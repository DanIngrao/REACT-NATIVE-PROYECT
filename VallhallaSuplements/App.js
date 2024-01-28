import { useFonts } from 'expo-font';
import { fonts } from './assets/Fonts/fonts';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import MainNavigator from './src/Navigation/MainNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){return null}

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    
  );
}