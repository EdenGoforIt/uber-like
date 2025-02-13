import CustomButton from "@/components/CustomButton";
import { onBoarding } from "@/constants/on-boarding";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
interface IProps {}

const Welcome: React.FC<IProps> = (props: IProps) => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastScreen = activeIndex === onBoarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-betyween bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoarding.map((item) => (
          <View key={item.id} className="flex items-centre justify-center p-5">
            {item.image && (
              <Image
                source={item.image ?? undefined}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
            )}
            <View className="flex flex-row items-center justify-center">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastScreen ? "Get Started" : "Next"}
        onPress={() =>
          isLastScreen
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        bgVariant="primary"
        className="w-11/12 mt-10"
      ></CustomButton>
    </SafeAreaView>
  );
};

export default Welcome;
