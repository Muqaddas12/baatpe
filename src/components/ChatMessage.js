
import { View, Text, StyleSheet } from 'react-native';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  return (
    <View style={[styles.messageContainer, isUser ? styles.user : styles.assistant]}>
      <Text style={styles.text}>{message.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 5, padding: 12,
    borderRadius: 10, maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  user: {
    backgroundColor: '#e0f7fa',
    alignSelf: 'flex-end',
  },
  assistant: {
    backgroundColor: '#ede7f6',
  },
  text: { fontSize: 16 },
});
