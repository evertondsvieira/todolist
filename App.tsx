import { Routes } from "./src/routes/Routes";
import { TaskContextProvider } from "./src/contexts/TaskContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <TaskContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </TaskContextProvider>
  );
}
