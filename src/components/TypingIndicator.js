
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function TypingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#6200ee" />
      <Text style={styles.text}>BaatPe is thinking...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', margin: 10 },
  text: { marginLeft: 8, fontStyle: 'italic', color: 'gray' },
});
