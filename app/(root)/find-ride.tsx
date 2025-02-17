import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RiderLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { router } from "expo-router";
import { Text, View } from "react-native";

const FindRide = () => (
  <RiderLayout title="Ride" snapPoints={["80%", "80%"]}>
    <View className="my-3">
      <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
      <GoogleTextInput
        icon={icons.target}
        containerStyle="bg-neutral-100"
        textInputBackgroundColor="#f5f5f5"
        handlePress={() => {}}
      />
    </View>

    <View className="my-3">
      <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
      <GoogleTextInput
        icon={icons.map}
        containerStyle="bg-neutral-100"
        textInputBackgroundColor="#f5f5f5"
        handlePress={() => {}}
      />
    </View>
    <CustomButton
      title="Find Now"
      onPress={() => router.push("/(root)/confirm-ride")}
      className="mb-5"
    />
  </RiderLayout>
);
export default FindRide;
