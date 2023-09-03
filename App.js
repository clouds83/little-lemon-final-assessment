import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './contexts/auth'
import RootNavigator from './navigators/RootNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}
