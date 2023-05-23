import { View, Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInputComponent = ({
  control,
  name,
  rules = {},
  placeholder,
  iconName,
  secureTextEntry,
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              className={`flex-row bg-[#fff] py-4 rounded-xl px-12 w-[336px] mt-4 border-2 ${
                error ? "border-[#ff0000]" : "border-[#475AD7] w-full"
              } `}
            >
              <View className="right-7">
                <MaterialCommunityIcons
                  name={iconName}
                  size={24}
                  color="#475AD7"
                />
              </View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text className="text-[#ff0000] self-stretch">
                {error.message || "Error Occured"}
              </Text>
            )}
          </>
        )}
      ></Controller>
    </View>
  );
};

export default CustomInputComponent;
