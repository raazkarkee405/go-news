import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BookmarkScreen,
  Explore,
  HomeScreen,
  OnboardingScreen,
  ProfileScreen,
  SearchScreen,
  WelcomeScreen,
} from "./screens";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { ConfirmEmailScreen, ForgotPasswordScreen, NewPasswordScreen, SignInScreen, SignUpScreen } from "./screens/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomScreen"
      screenOptions={({ route }) => ({
        title: "",
        headerShown: false,
        tabBarActiveTintColor: "#475AD7",
        tabBarIcon: ({ color, size }) => {
          const icons = {
            HomeScreen: "home",
            SearchScreen: "magnify",
            Explore: "apps",
            BookmarkScreen: "bookmark-outline",
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 
         {isFirstLaunch && (
           <>
             <Stack.Screen
               name="OnboardingScreen"
               component={OnboardingScreen}
             />
           </>
         )}
         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
         <Stack.Screen name="Root" component={Root} />
         <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
         
        */}
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
