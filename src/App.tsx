// eslint-disable-next-line import/no-extraneous-dependencies
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './styles/global.css';

export function App() {
  const [loaded] = useFonts({
    // eslint-disable-next-line global-require
    RobotoRegular: require('../assets/fonts/roboto-regular.ttf'),
    // eslint-disable-next-line global-require
    RobotoBold: require('../assets/fonts/roboto-bold.ttf'),
    // eslint-disable-next-line global-require
    RobotoThin: require('../assets/fonts/roboto-thin.ttf'),
  });

  if (!loaded) return null;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl color-green-400">This is Roboto Regular (default)</Text>
      <Text className="font-roboto text-4xl color-orange-600">This is Roboto Regular (default)</Text>
      <Text className="font-bold text-5xl color-blue-700">This is Roboto Bold</Text>
      <Text className="font-thin text-5xl color-red-900">This is Roboto Thin</Text>
      <StatusBar style="auto" />
    </View>
  );
}
