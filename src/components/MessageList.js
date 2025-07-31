
import { FlatList } from 'react-native';
import ChatMessage from './ChatMessage';

export default function MessageList({ messages }) {
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}
