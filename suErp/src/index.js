import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContentView from './ContentView';

export default function App() {
  return (
    <View style={styles.container}>
      <ContentView />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:28,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
