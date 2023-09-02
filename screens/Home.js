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

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
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
        <ScrollView style={{ paddingLeft: 24 }} horizontal={true}>
          <Text style={styles.breakdownItem}>Starters</Text>
          <Text style={styles.breakdownItem}>Mains</Text>
          <Text style={styles.breakdownItem}>Deserts</Text>
          <Text style={styles.breakdownItem}>Drinks</Text>
          <Text style={styles.breakdownItem}>Lipsum</Text>
        </ScrollView>
      </View>

      {/* Menu items */}
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ padding: 24, paddingBottom: 0 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginBottom: 24 }}>
              <Text style={styles.itemTitle}>Item name</Text>
              <Text style={{ fontSize: 16 }}>Description of this item</Text>
              <Text style={styles.itemPrice}>$10</Text>
            </View>
            <Image source={heroImage} style={styles.itemImage} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginBottom: 24 }}>
              <Text style={styles.itemTitle}>Item name</Text>
              <Text style={{ fontSize: 16 }}>Description of this item</Text>
              <Text style={styles.itemPrice}>$10</Text>
            </View>
            <Image source={heroImage} style={styles.itemImage} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginBottom: 24 }}>
              <Text style={styles.itemTitle}>Item name</Text>
              <Text style={{ fontSize: 16 }}>Description of this item</Text>
              <Text style={styles.itemPrice}>$10</Text>
            </View>
            <Image source={heroImage} style={styles.itemImage} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginBottom: 24 }}>
              <Text style={styles.itemTitle}>Item name</Text>
              <Text style={{ fontSize: 16 }}>Description of this item</Text>
              <Text style={styles.itemPrice}>$10</Text>
            </View>
            <Image source={heroImage} style={styles.itemImage} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginBottom: 24 }}>
              <Text style={styles.itemTitle}>Item name</Text>
              <Text style={{ fontSize: 16 }}>Description of this item</Text>
              <Text style={styles.itemPrice}>$10</Text>
            </View>
            <Image source={heroImage} style={styles.itemImage} />
          </View>
        </View>
      </ScrollView>
    </View>
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
    marginTop: 24,
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
    marginRight: 24,
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
