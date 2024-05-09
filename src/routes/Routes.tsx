import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InProgress } from "../Pages/InProgress";
import { Completed } from "../Pages/Completed";
import { TabNavigator } from "./components/TabNavigator";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tab" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="In progress"
          component={InProgress}
          options={{
            title: "Tarefas em andamento",
          }}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{
            title: "Tarefas concluidas",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
