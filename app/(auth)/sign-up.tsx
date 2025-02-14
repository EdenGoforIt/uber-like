import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
interface IProps {}

interface FormData {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  // ... other form fields
}

const SignUp: React.FC<IProps> = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold aboluste bottom-5 left-5">
            Create Your AccounT
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter Your Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: string | undefined) =>
              setForm({ ...form, name: value })
            }
          />
          <InputField
            label="Email"
            placeholder="Enter Your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string | undefined) =>
              setForm({ ...form, email: value })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value: string | undefined) =>
              setForm({ ...form, password: value })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
