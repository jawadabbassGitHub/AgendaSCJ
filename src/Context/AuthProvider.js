import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../Components/Utils/BASE_URL";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (token) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/user_info`, {
        token,
      });
      console.log(response.data); 
      const userData = response.data.user;
      setUser(userData);
      setToken(token);

      await AsyncStorage.multiSet([
        ["user", JSON.stringify(userData)],
        ["accessToken", token],
      ]);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setToken(null);
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("accessToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("user");
      let userToken = await AsyncStorage.getItem("accessToken");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setToken(userToken);
        setUser(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, user, isLoading, setIsLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
