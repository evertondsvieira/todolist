import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InProgress } from "../../Pages/InProgress";
import { Completed } from "../../Pages/Completed";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: "#494EE8",
  },
  headerTintColor: "#ffffff",
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#494EE8", 
        tabBarInactiveTintColor: "gray", 
        tabBarLabelStyle: { fontSize: 16 }, 
        tabBarStyle: { backgroundColor: "#F8F8F8" }, 
        tabBarIconStyle: { width: 30, height: 30 }, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Em andamento") {
            iconName = focused ? "ios-list" : "ios-list"; 
          } else if (route.name === "Completas") {
            iconName = focused ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"; 
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Em andamento" component={InProgress} options={commonScreenOptions}/>
      <Tab.Screen name="Completas" component={Completed} options={commonScreenOptions} />
    </Tab.Navigator>
  );
};
