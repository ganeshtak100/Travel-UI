import React from 'react';
import {Text} from 'react-native';
// import 'react-native-gesture-handler'
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';
export const App = () => {
  Text.letterSpacing = 0;
  return (
    <SafeAreaProvider style={{flex: 1}}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      <Navigation />
      {/* </GestureHandlerRootView> */}
    </SafeAreaProvider>
  );
};
