import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import HomeUser from "./screens/HomeUser";
import DatosApi from "./screens/DatosApi";
import DatosApi2 from "./screens/DatosApi2";
import DatosApi3 from "./screens/DatosApi3";
import DatosApi4 from "./screens/DatosApi4";
import DatosApi5 from "./screens/DatosApi5";
import DatosApi6 from "./screens/DatosApi6";
import BancoAzteca from "./screens/BancoAzteca";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "MXN-Dollar Watcher",
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'MXN-Dollar Watcher -> Graficts',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="HomeUser"
          component={HomeUser}
          options={{
            title: 'MXN-Dollar Watcher',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi"
          component={DatosApi}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi2"
          component={DatosApi2}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi3"
          component={DatosApi3}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi4"
          component={DatosApi4}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi5"
          component={DatosApi5}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />


        <Stack.Screen
          name="DatosApi6"
          component={DatosApi6}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="BancoAzteca"
          component={BancoAzteca}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />


      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
