import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus arrival time:</Text>
      <Text style={styles.arrivalTime}>08:45:22</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh!</Text>
      </TouchableOpacity>
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
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20
  },
  arrivalTime: {
    fontWeight: "bold",
    fontSize: 52
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    marginTop: 20
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  }
});
