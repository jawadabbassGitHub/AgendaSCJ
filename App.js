import { ToastProvider } from "react-native-toast-notifications";
import AppNavigation from "./src/Navigation/AppNavigation";
import AuthProvider from "./src/Context/AuthProvider";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor={"#E5ECF9"} barStyle="dark-content" />
      <ToastProvider>
        <AppNavigation />
      </ToastProvider>
    </AuthProvider>
  );
}
