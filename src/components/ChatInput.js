
import { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Voice from '@react-native-voice/voice';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function ChatInput({ onSend, language, onLangChange }) {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const rotation = useSharedValue(0);
  const supportedLanguages = [
    { label: 'English', code: 'en-US' },
    { label: 'Hindi', code: 'hi-IN' },
    { label: 'Urdu', code: 'ur-PK' },
  ];

  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      const transcript = e.value?.[0] || '';
      setText(transcript);
      setListening(false);
    };
    Voice.onSpeechError = () => setListening(false);
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    rotation.value = listening
      ? withRepeat(withTiming(360, { duration: 1000 }), -1)
      : withTiming(0);
  }, [listening]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const startListening = async () => {
    try {
      setListening(true);
      await Voice.start(language);
    } catch {
      setListening(false);
    }
  };

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Animated.View style={animatedStyle}>
          <TouchableOpacity onPress={startListening} style={{ marginRight: 6 }}>
            <Ionicons name={listening ? 'mic-circle' : 'mic-outline'} size={28} color="#6200ee" />
          </TouchableOpacity>
        </Animated.View>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type or speak..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="#6200ee" />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownLabel}>🎤 Speak in:</Text>
        {supportedLanguages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            onPress={() => onLangChange(lang.code)}
            style={[
              styles.langOption,
              language === lang.code && styles.selectedLang,
            ]}
          >
            <Text>{lang.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', padding: 10,
    borderTopWidth: 1, borderColor: '#ccc', alignItems: 'center',
  },
  input: {
    flex: 1, padding: 10,
    borderRadius: 20, backgroundColor: '#f0f0f0', marginRight: 10,
  },
  dropdown: {
    flexDirection: 'row', flexWrap: 'wrap',
    alignItems: 'center', marginTop: 8, marginBottom: 4, paddingLeft: 10,
  },
  dropdownLabel: { marginRight: 6, fontWeight: 'bold' },
  langOption: {
    backgroundColor: '#f1f1f1', paddingHorizontal: 10,
    paddingVertical: 6, borderRadius: 12, marginHorizontal: 4, marginTop: 6,
  },
  selectedLang: { backgroundColor: '#d1c4e9' },
});
