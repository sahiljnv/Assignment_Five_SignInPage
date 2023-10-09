import { View, Text, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUpDetailContext } from '../../../ContextApi/SignUpContextApi';
import { removeToken } from '../../../Uitils/uitility';

const DashBoard = () => {
    const {setCheckOnboarding} = useContext(signUpDetailContext)

    const handleButton =()=> {
        setCheckOnboarding(false);
        removeToken();

    }
    
   

    const [data, setData] = useState<string>('')


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TOKEN');

            console.log("GET_DATA ===>", value)

            setData(value ?? '');
        } catch (error) {
            // Error retrieving data
        }
    };
    return (

        <View style={{ flex: 1 }}>
            <Text style={{ color: 'black' }}>{data}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Button title="Log Out" onPress={handleButton} />
                <Button title='show' onPress={getData}></Button>
            </View>
        </View>
    )
}

export default DashBoard