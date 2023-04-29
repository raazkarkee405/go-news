import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExploreScreen from "./ExploreScreen";
import AddCategoryScreen from "./AddCategoryScreen";

const Stack = createNativeStackNavigator();
const Explore = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
    </Stack.Navigator>
  );
};

export default Explore;
