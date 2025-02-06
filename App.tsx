import { Text} from 'react-native'
import React, {useEffect} from 'react'
import 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Navigation } from '@navigation/Navigation'
const App = () => {
  Text.letterSpacing = 0

  return (
            <SafeAreaProvider style={{flex: 1}}>
              <GestureHandlerRootView style={{flex: 1}}>
                  <Navigation />
              </GestureHandlerRootView>
            </SafeAreaProvider>
  )
}