import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IProp {
  onPress: () => void;
  title: string;
  bgVariant?: "secondary" | "primary" | "danger" | "success" | "outline";
  textVariant?: "secondary" | "primary" | "danger" | "success" | "outline";
  IconLeft?: React.FC | ReactNode;
  IconRight?: React.FC | ReactNode;
  className?: string | undefined;
}
const getBgVariantStyle = (variant: IProp["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: IProp["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton: React.FC<IProp> = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant,
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full flex flex-row p-3 justify-center items center shadow-md shadow-neutral-400/70
			 ${getBgVariantStyle(bgVariant)} ${className}`}
    {...props}
  >
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;
