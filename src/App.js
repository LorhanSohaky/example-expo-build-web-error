import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App () {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaProvider>
  )
}
