import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInSignUpScreen from '../Screens/LoninSignUpScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import PersonInfoScreen from '../Screens/PersonInfoScreen';
import MeasurementsScreen from '../Screens/MeasurementsScreen';
import WorkoutsWeeklyScreen from '../Screens/WorkoutsWeeklyScreen';
import StartTrainScreen from '../Screens/StartTrainScreen';
import StartWorkoutScreen from '../Screens/StartWorkoutScreen';
import LoginScreen from '../Screens/LoginScreen';
import { StatusBar } from 'react-native';
export type SignUpStackParamList = {
    LogInSingUpScreen: undefined,
    SignUpScreen: undefined,
    LoginScreen: undefined,
    DashBoard : undefined,
    PersonInfoScreen: undefined,
    MeasurementsScreen: undefined,
    StartTrainScreen: undefined,
    WorkoutsWeeklyScreen: undefined,
    StartWorkoutScreen: undefined,
    DashBoardScreens: undefined
}

const SignInStack = createNativeStackNavigator<SignUpStackParamList>();

const OnboardingScreens = () => 
     (
        <>
         <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
        />
         <SignInStack.Navigator>
            <SignInStack.Screen
                name='LogInSingUpScreen'
                component={LogInSignUpScreen}
                options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }} />
            <SignInStack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }} />
            <SignInStack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }} />
            <SignInStack.Screen
                name='PersonInfoScreen'
                component={PersonInfoScreen}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }} />
            <SignInStack.Screen
                name='MeasurementsScreen'
                component={MeasurementsScreen}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }} />
            <SignInStack.Screen
                name='StartTrainScreen'
                component={StartTrainScreen}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }} />
            <SignInStack.Screen
                name='WorkoutsWeeklyScreen'
                component={WorkoutsWeeklyScreen}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }} />
            <SignInStack.Screen
                name='StartWorkoutScreen'
                component={StartWorkoutScreen}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }} />

        </SignInStack.Navigator>
        </>
       
    )


export default OnboardingScreens