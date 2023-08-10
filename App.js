import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, this is Arnab Shikder.</Text>
      <Image
        source={require('./assets/arnab.jpg')} // Update with your image's path
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hi</Text>
      </TouchableOpacity>
      <Text style={styles.web}>I am a web Developer</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
  },
  hello: {
    color: 'purple',
    fontSize: 25,
  },
  image: {
    width: 200, // Set the desired width of the image
    height: 300, // Set the desired height of the image
    resizeMode: 'contain', // Adjust how the image fits within the available space
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  web: {
    color: 'purple',
    marginTop: 20,
    fontSize: 18,
  }
});
