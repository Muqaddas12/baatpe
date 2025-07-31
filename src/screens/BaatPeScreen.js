
import { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';
import TypingIndicator from '../components/TypingIndicator';
import { getDataFromApi } from '../utils/getDataFromApi';
import * as Speech from 'expo-speech';

export default function BaatPeScreen() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('en-US');

  const suggestions = [
    'Tell me a cool AI startup idea',
    'What’s trending in tech today?',
    'Give me DSA interview tips',
    'Explain recursion in simple terms',
  ];

  const speak = (text) => {
    Speech.speak(text, { language: 'en-US', rate: 0.9, pitch: 1 });
  };

  const handleSend = async (text) => {
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsTyping(true);
    const apiResponse = await getDataFromApi(text);
    setIsTyping(false);
    const assistantMessage = {
      role: 'assistant',
      content: JSON.stringify(apiResponse?.startups || apiResponse || 'No data received'),
    };
    setMessages((prev) => [...prev, assistantMessage]);
    speak(assistantMessage.content);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MessageList messages={messages} />
      {isTyping && <TypingIndicator />}
      <View style={styles.suggestions}>
        {suggestions.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleSend(item)} style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ChatInput onSend={handleSend} language={language} onLangChange={setLanguage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  suggestions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  suggestionButton: {
    backgroundColor: '#eceff1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  suggestionText: {
    fontSize: 13,
    color: '#333',
  },
});
