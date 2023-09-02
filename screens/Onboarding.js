import { useEffect, useState } from 'react'
import logo from '../assets/horizontal-logo.png'
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Onboarding({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const storeData = async (name, email) => {
    try {
      await AsyncStorage.setItem('name', name)
      await AsyncStorage.setItem('email', email)
      navigation.navigate('Home')
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      const email = await AsyncStorage.getItem('email')

      if (name && email) {
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
    <View style={styles.container}>
      <Image
        source={logo}
        style={{ width: 192, height: 54 }}
        resizeMode='contain'></Image>
      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome,</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Let us get to know you
          </Text>
        </View>

        <View style={{ width: '100%' }}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Your first name'
            placeholderTextColor='#777'
            value={name}
            onChangeText={(e) => setName(e)}
          />
        </View>

        <View style={{ width: '100%' }}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Your email address'
            placeholderTextColor='#777'
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
      </View>

      <Pressable
        style={styles.buttonContainer}
        onPress={() => storeData(name, email)}
        disabled={!name || !email}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#777',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#495e57',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
