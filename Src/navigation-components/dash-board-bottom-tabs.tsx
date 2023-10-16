import {StatusBar } from 'react-native'
import React from 'react'
import JustTrainTab from '../Screens/DashBoardScreen/BottomTab/JustTrainTab';
import ActivityTab from '../Screens/DashBoardScreen/BottomTab/ActivityTab';
import DashBoardScreens from './dash-board-screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WalkIcon from 'react-native-vector-icons/FontAwesome5';
import StopWatchIcon from 'react-native-vector-icons/Fontisto';
import BarIcon from 'react-native-vector-icons/MaterialIcons';

export type DashBoardBottmProps = {
    workouts: undefined,
    justTrain: undefined,
    activity: undefined
}
const DashBoardBottmTab = createMaterialBottomTabNavigator<DashBoardBottmProps>();

const DashBoardBottomTabs = () => {
    return (
        <>
            <StatusBar
                backgroundColor='white' 
                barStyle="dark-content"
                
                           />
            <DashBoardBottmTab.Navigator>
                <DashBoardBottmTab.Screen name='workouts' component={DashBoardScreens}
                options={{
                    tabBarIcon:({focused})=> <WalkIcon name='walking' size={25} color= {focused? 'black':'gray'}  />


                }}
                 />
                <DashBoardBottmTab.Screen name='justTrain' component={JustTrainTab}
                 options={{
                    tabBarIcon:({focused})=> <StopWatchIcon name='stopwatch' size={25} color= {focused? 'black':'gray'} />


                }} />
                <DashBoardBottmTab.Screen name='activity' component={ActivityTab} 
                options={{
                    tabBarIcon:({focused})=> <BarIcon name='bar-chart' size={25} color= {focused? 'black':'gray'} />


                }} />
            </DashBoardBottmTab.Navigator>
        </>

    )

}

export default DashBoardBottomTabs