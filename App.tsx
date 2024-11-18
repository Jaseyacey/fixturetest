import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '@react-native-firebase/app';

export default function App() {
  firebase.initializeApp({
    apiKey: 'AIzaSyD-1uEoe8J8J5oJYqZj7sZ2Z6gK8a5M0oY',
    authDomain: 'myapp-12345.firebaseapp.com',
    databaseURL: 'https://myapp-12345.firebaseio.com',
    projectId: 'myapp-12345',
    storageBucket: 'myapp-12345.appspot.com',
    messagingSenderId: '12345',
    appId: '1:12345:web:4a4b090e8e49fbb1',
  });
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
