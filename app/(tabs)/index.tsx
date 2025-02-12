import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return ( 
    <SafeAreaView className='flex-1 items-center justify-center bg-red-50'>
      <Text className='text-red-500'>yeah  UP</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
 