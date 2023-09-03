import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const navigation = useNavigation()

  const login = async (name, email) => {
    if (name !== '' && email !== '') {
      await AsyncStorage.setItem('name', name)
      await AsyncStorage.setItem('email', email)
      setUser({ name: name, email: email })
      navigation.navigate('Home')
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.setItem('name', '')
      await AsyncStorage.setItem('email', '')
      setUser({})
      navigation.navigate('Onboarding')
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      const email = await AsyncStorage.getItem('email')

      if (name && email) {
        setUser({ name: name, email: email })
        navigation.navigate('Home')
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, getData }}>
      {children}
    </AuthContext.Provider>
  )
}
