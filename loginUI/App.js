import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './screens/auth/Login';
import { Network } from './screens/apiPractice';
import { FlatListBasics } from './screens/listView';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListBasics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
