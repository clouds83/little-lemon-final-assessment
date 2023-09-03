import logo from '../assets/horizontal-logo.png'
import heroImage from '../assets/hero-image.jpg'
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function Home({ navigation }) {
  const items = [
    {
      id: 1,
      category: 'starters',
      name: 'Hummus',
      description: 'Creamy dip',
      price: 6,
      image: require('../assets/hummus.jpeg'),
    },
    {
      id: 2,
      category: 'mains',
      name: 'Kebab',
      description: 'Grilled meat',
      price: 12,
      image: require('../assets/kebab.jpg'),
    },
    {
      id: 3,
      category: 'desserts',
      name: 'Baklava',
      description: 'Sweet pastry',
      price: 8,
      image: require('../assets/baklava.jpeg'),
    },
    {
      id: 4,
      category: 'drinks',
      name: 'Mint Tea',
      description: 'Refreshing drink',
      price: 3,
      image: require('../assets/mint-tea.jpg'),
    },
  ]

  const [filter, setFilter] = useState('all')
  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
        <Pressable
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </Pressable>
      </View>

      {/* Hero */}
      <View style={{ backgroundColor: '#495e57' }}>
        <View style={styles.upperHero}>
          <View style={{ flex: 1, flexGrow: 1 }}>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.subTitle}>Brazil</Text>
            <Text style={{ color: 'white' }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <View style={{ width: 'auto' }}>
            <Image source={heroImage} style={styles.heroImage} />
          </View>
        </View>
        <TextInput placeholder='Search' style={styles.input}></TextInput>
      </View>

      {/* Menu breakdown */}
      <View style={styles.breakdownContainer}>
        <Text style={styles.breakdownTitle}>Order for delivery!</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            gap: 16,
            paddingHorizontal: 24,
          }}>
          <Text
            style={[
              styles.breakdownItem,
              filter == 'all' ? styles.active : null,
            ]}
            onPress={() => setFilter('all')}>
            All
          </Text>
          <Text
            style={[
              styles.breakdownItem,
              filter == 'starters' ? styles.active : null,
            ]}
            onPress={() => setFilter('starters')}>
            Starters
          </Text>
          <Text
            style={[
              styles.breakdownItem,
              filter == 'mains' ? styles.active : null,
            ]}
            onPress={() => setFilter('mains')}>
            Mains
          </Text>
          <Text
            style={[
              styles.breakdownItem,
              filter == 'desserts' ? styles.active : null,
            ]}
            onPress={() => setFilter('desserts')}>
            Desserts
          </Text>
          <Text
            style={[
              styles.breakdownItem,
              filter == 'drinks' ? styles.active : null,
            ]}
            onPress={() => setFilter('drinks')}>
            Drinks
          </Text>
        </ScrollView>
      </View>

      {/* Menu items */}
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ padding: 24, paddingBottom: 0 }}>
          {filteredItems.map((item) => (
            <View key={item.id} style={{ flexDirection: 'row' }}>
              <View style={{ flexGrow: 1, marginBottom: 24 }}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={{ fontSize: 16 }}>{item.description}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
              <Image source={item.image} style={styles.itemImage} />
            </View>
          ))}
        </View>
      </ScrollView>
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
  profileButton: {
    position: 'absolute',
    right: 24,
    alignSelf: 'center',
  },
  upperHero: {
    flexDirection: 'row',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    color: '#f4ce14',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    lineHeight: 20,
    marginBottom: 8,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  breakdownContainer: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  breakdownTitle: {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 16,
    marginLeft: 24,
  },
  breakdownItem: {
    backgroundColor: '#e8ede8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#4d5d57',
    color: 'white',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
