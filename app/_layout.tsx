import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  //
  // useEffect(() => {
  //   if (loaded) {
  //     Ò;
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);
  //
  // if (!loaded) {
  //   return null;
  // }

  return (
    <Stack>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
