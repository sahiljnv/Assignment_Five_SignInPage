import { View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import PlansScreen from '../Screens/DashBoardScreen/TopTab/PlansScreen';
import WorkOutScreen from '../Screens/DashBoardScreen/WorkOutScreen';
import ChallengesScreen from '../Screens/DashBoardScreen/TopTab/ChallengesScreen';
import SavedScreen from '../Screens/DashBoardScreen/TopTab/SavedScreen';
import DownloadsScreen from '../Screens/DashBoardScreen/TopTab/DownloadsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/Fontisto';
import Person from 'react-native-vector-icons/Ionicons';
export type DashBoardTabProps = {
    WorkOuts:undefined,
    Plans: undefined,
    Challenges:undefined,
    Saved:undefined,
    Downloads:undefined
}
const DashBoardTopTab = createMaterialTopTabNavigator<DashBoardTabProps>();

const DashBoardScreens = ()=>(
    <SafeAreaView style={{height: '100%', width: '100%',paddingTop:20,backgroundColor:'white'}}>
       <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20,alignItems:'center'}} >
        <View>
            <Image source={require('../Assets/Images/notifyIcon.png')} resizeMethod={'resize'} resizeMode={'contain'}  />
        </View>
        <View style={{flexDirection:'row',gap:10}}>
            <View>
            <SearchIcon name='search1' size={25} color='black' />
            </View>
            <View>
                <BellIcon name='bell' size={25} color='black' />
            </View>
            <View>
                <Person name='person' size={25} color='black' /> 
            </View>
        </View>
       </View>
        <DashBoardTopTab.Navigator screenOptions={{
        tabBarScrollEnabled:true,
        tabBarIndicatorStyle:{
            backgroundColor:"black"  
        },
        tabBarItemStyle:{
            width:110,
        }
        
    }}>
    <DashBoardTopTab.Screen name='WorkOuts' component={WorkOutScreen} />
    <DashBoardTopTab.Screen name='Plans' component={PlansScreen} />
    <DashBoardTopTab.Screen name='Challenges' component={ChallengesScreen} />
    <DashBoardTopTab.Screen name='Saved' component={SavedScreen} />
    <DashBoardTopTab.Screen name='Downloads' component={DownloadsScreen} />
  </DashBoardTopTab.Navigator>
     </SafeAreaView>

 )


export default DashBoardScreens