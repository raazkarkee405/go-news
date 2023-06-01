import { View, ActivityIndicator } from "react-native";

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
import {
  ConfirmEmailScreen,
  ForgotPasswordScreen,
  NewPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens/auth";
import { Amplify, Auth, Hub } from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);
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
            Explore: "apps",
            // BookmarkScreen: "bookmark-outline",
            ProfileScreen: "account",
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
      <Tab.Screen name="Explore" component={Explore} />
      {/*<Tab.Screen name="BookmarkScreen" component={BookmarkScreen} />*/}
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.listen("auth", listener);
  });

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

  if (user === undefined) {
    return (
      <View className="flex-1, justify-center text-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>
        ) : (
          <>
            {isFirstLaunch && (
              <>
                <Stack.Screen
                  name="OnboardingScreen"
                  component={OnboardingScreen}
                />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              </>
            )}
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen
              name="ConfirmEmailScreen"
              component={ConfirmEmailScreen}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="NewPasswordScreen"
              component={NewPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
