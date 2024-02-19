import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import NavigationContainer from './screen/main'

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function App() {

  return <ThemeProvider theme={theme}>
    <NavigationContainer />
    <StatusBar style="auto" />
  </ThemeProvider>
}
