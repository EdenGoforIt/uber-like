import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
interface IProps {}

interface FormData {
  email: string | undefined;
  password: string | undefined;
  // ... other form fields
}

const SignIn: React.FC<IProps> = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    router.replace("/(root)/(tabs)/home");
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold aboluste bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter Your Email"
            textContentType="emailAddress"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string | undefined) =>
              setForm({ ...form, email: value })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            textContentType="password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value: string | undefined) =>
              setForm({ ...form, password: value })
            }
          />
        </View>
        <CustomButton title="Sign In" onPress={onSignInPress} className="p-4" />
        <OAuth />
        <Link
          href="/sign-up"
          className="text-lg text-center text-general-200 mt-10"
        >
          <Text>Don't have an account?</Text>
          <Text className="text-primary-500"> Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
