import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/auth'
import logo from '../assets/horizontal-logo.png'
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { user, login: updateProfile, logout } = useContext(AuthContext)

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>
        <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
      </View>

      <View style={{ gap: 24, paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Personal information
        </Text>
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

        <View style={styles.buttonsWrapper}>
          <Pressable style={styles.secondaryButtonContainer}>
            <Text
              style={styles.secondaryButtonText}
              onPress={() => navigation.navigate('Home')}>
              Discard
            </Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => updateProfile(name, email)}
            disabled={!name || !email}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ margin: 24, marginTop: 0 }}>
        <Pressable
          style={styles.accentButtonContainer}
          onPress={() => logout()}>
          <Text style={styles.accentButtonText}>Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 105,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButton: {
    position: 'absolute',
    left: 24,
    alignSelf: 'center',
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
    borderWidth: 1,
    borderColor: '#495e57',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButtonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#888',
  },
  secondaryButtonText: {
    color: '#888',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accentButtonContainer: {
    backgroundColor: '#f4ce14',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#ca8a2f',
    width: '100%',
  },
  accentButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
})
