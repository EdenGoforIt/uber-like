import { router } from "expo-router";
import { FlatList, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";
import { MarkerData } from "@/types/type";

const ConfirmRide = () => {
  const drivers = [
    {
      latitude: 37.7749,
      longitude: -122.4194,
      id: 1,
      title: "Luxury Sedan",
      profile_image_url:
        "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
      car_image_url:
        "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
      car_seats: 4,
      rating: 4.8,
      first_name: "John",
      last_name: "Doe",
      time: 25,
      price: "$35",
    },
    {
      latitude: 37.7749,
      longitude: -122.4194,
      id: 2,
      title: "Luxury Sedan",
      profile_image_url:
        "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
      car_image_url:
        "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
      car_seats: 4,
      rating: 4.8,
      first_name: "John",
      last_name: "Doe",
      time: 25,
      price: "$35",
    },
  ] as MarkerData[];

  const { selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title={"Choose a Rider"} snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <DriverCard
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item.id!)}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
