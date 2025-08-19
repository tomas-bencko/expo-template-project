import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './styles/global.css';

export function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
