import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Screens/Home/Home";
import AllCategories from "../Components/Screens/Categories/AllCategories";
import AllCourses from "../Components/Screens/AllCourses/AllCourses";
import PopulerCourses from "../Components/Screens/PopulerCourses/PopulerCourses";
import CourseDetails from "../Components/Screens/CourseDetails/CourseDetails";
import PaymentMethod from "../Components/Screens/PaymentMethod/PaymentMethod";
import PaymentInfo from "../Components/Screens/PaymentInfo/PaymentInfo";
import AddNewCard from "../Components/Screens/AddNewCard/AddNewCard";
import CourseInfo from "../Components/Screens/CourseInfo/CourseInfo";
import PaymentOrderDone from "../Components/Screens/PaymentOrderDone/PaymentOrderDone";
import CourseLectures from "../Components/Screens/CourseLectures/CourseLectures";
import CourseLectureVideo from "../Components/Screens/CourseLectures/CourseLectureVideo";
import TopInstractorDetails from "../Components/Screens/TopInstractorDetails/TopInstractorDetails";
import Cart from "../Components/Screens/Cart/Cart";
import HomeMoreCourses from "../Components/Screens/Home/HomeMoreCourses";
import OrderHistory from "../Components/Screens/OrderHistory/OrderHistory";
import PopulerMentor from "../Components/Screens/PopulerMentor/PopulerMentor";
import PopulerMentorDetails from "../Components/Screens/PopulerMentor/PopulerMentorDetails";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page Nested"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All Category"
        component={AllCategories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All Courses"
        component={AllCourses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Populer Courses"
        component={PopulerCourses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Course Details"
        component={CourseDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Method"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Info"
        component={PaymentInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add New Card"
        component={AddNewCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Course Info"
        component={CourseInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Order Done"
        component={PaymentOrderDone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Course Lectures"
        component={CourseLectures}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Course Lecture Video"
        component={CourseLectureVideo}
        options={{ headerTitleAlign: "center", title: "Course Video" }}
      />
      <Stack.Screen
        name="Top Instructor"
        component={TopInstractorDetails}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="More Courses"
        component={HomeMoreCourses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order History"
        component={OrderHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Populer Mentor"
        component={PopulerMentor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Populer Mentor Details"
        component={PopulerMentorDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
