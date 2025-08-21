import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './styles/global.css';

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <Text>There was a problem loading fonts</Text>;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-roboto text-5xl color-blue-700">This is Roboto Regular</Text>
      <Text className="font-roboto-medium text-5xl color-blue-700">This is Roboto Medium</Text>
      <Text className="font-roboto-bold text-5xl color-blue-700">This is Roboto Bold</Text>
      <StatusBar style="auto" />
    </View>
  );
}
