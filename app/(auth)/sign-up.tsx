import { images } from "@/constants";
import { Image, ScrollView, View } from "react-native";
interface IProps {}

const SignUp: React.FC<IProps> = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image
            source={images.signUpCar}
            className="z-0 w-full h-[250px]"
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
