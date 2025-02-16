import GoogleTextInput from "@/components/GoogleTextInput";
import RiderLayout from "@/components/RiderLayout";
import { icons } from "@/constants";
import { Text, View } from "react-native";

const FindRide = () => (
  <RiderLayout title="Ride">
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
  </RiderLayout>
);
export default FindRide;
