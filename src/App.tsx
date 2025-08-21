// eslint-disable-next-line camelcase
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Text } from './components/primitives/Text';
import './styles/global.css';

export function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Roboto_400Regular,
    // eslint-disable-next-line camelcase
    Roboto_500Medium,
    // eslint-disable-next-line camelcase
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <Text>There was a problem loading fonts</Text>;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text size="lg" color="blue-700">
        This is Roboto Regular
      </Text>
      <Text size="lg" weight="medium" color="blue-700">
        This is Roboto Medium
      </Text>
      <Text size="lg" weight="bold" color="blue-700">
        This is Roboto Bold
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
