# 📱 BaatPe AI Assistant

![React Native](https://img.shields.io/badge/Built%20with-React%20Native-61dafb?logo=react\&logoColor=white\&style=for-the-badge)
![Expo](https://img.shields.io/badge/Powered%20by-Expo-000020?logo=expo\&logoColor=white\&style=for-the-badge)
![License](https://img.shields.io/github/license/your-username/BaatPe?style=for-the-badge)

> "Talk smart. Talk BaatPe."

---

## 📸 Screenshots

| Chat Interface                                         | Voice Input & Suggestions                               |
| ------------------------------------------------------ | ------------------------------------------------------- |
| ![chat](https://placehold.co/200x400?text=Chat+Screen) | ![voice](https://placehold.co/200x400?text=Voice+Input) |

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Muqaddas12/BaatPe.git
cd BaatPe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Create a file at `src/utils/getDataFromApi.js` and replace:

```js
Authorization: 'Bearer YOUR_API_KEY'
```

with your actual [Perplexity API Key](https://docs.perplexity.ai).

### 4. Run with Expo Dev Client

```bash
npx expo run:android
# or
npx expo run:ios
```

> 🔐 Note: `react-native-voice` requires Expo Dev Client (not Expo Go)

---

## 🧩 Features

| Feature           | Description                                  |
| ----------------- | -------------------------------------------- |
| 💬 Chat Interface | Assistant + user message bubble system       |
| 🎤 Voice Input    | Via `react-native-voice` + language selector |
| 🗣 Speech Reply   | Uses `expo-speech` for assistant voice       |
| 💡 Prompt Buttons | Suggested example prompts                    |
| 🌍 Multi-Language | Hindi, Urdu, English supported               |

---

## 📁 Folder Structure

```
BaatPe/
├── app/             # Expo Router routes
│   └── _drawer/
│       └── baatpe.js
├── src/
│   ├── components/  # UI components
│   ├── screens/     # BaatPeScreen
│   └── utils/       # getDataFromApi.js
```

---

## 🛠 Tech Stack

* **React Native**
* **Expo Router**
* **Perplexity API**
* **react-native-voice**
* **expo-speech**

---

## 🤝 Contribute

Feel free to fork and improve this. PRs welcome!

## 📄 License

[MIT](LICENSE)
