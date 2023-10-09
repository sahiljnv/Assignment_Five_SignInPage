import {View, Image} from 'react-native'
import React from 'react'
import ButtonComponent from '../../Components/ButtonComponent'
import BackgroundImageContainer from '../../Components/BackgroundImageContainer'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style'
import { SignUpStackParamList } from '../../NavigationComponents/OnboardingScreens';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'LogInSingUpScreen'>


const LogInSignUpScreen = ({navigation} : LogInSignUpProps) => {

    const signUpHandler = () =>{        
        navigation.navigate('SignUpScreen');
    }
    const loginhandler= () =>{
        navigation.navigate('LoginScreen')
    }
    return (
        <BackgroundImageContainer>
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../../Assets/Images/FirstScreen.png')} style={styles.img} resizeMethod={'resize'} resizeMode={'contain'} />
            </View>
            <View style={styles.buttonsContainer}>
                <ButtonComponent backgroundColor='white' color='black' onClick={loginhandler} > Log in</ButtonComponent>
                <ButtonComponent backgroundColor='black' color='white' onClick={signUpHandler}> Sign up</ButtonComponent>
                
            </View>
        </View>
        </BackgroundImageContainer>
    )
}

export default LogInSignUpScreen

