import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';

import { Loading } from '@components/Loading';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent

      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
