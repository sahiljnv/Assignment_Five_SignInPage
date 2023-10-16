import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { signUpDetailContext } from '../context-api/sign-up-context-api';
import OnboardingScreens from './onboarding-screens';
import DashBoardBottomTabs from './dash-board-bottom-tabs';

const Navigation = () => {
    const {checkOnboarding} = useContext(signUpDetailContext)
    return (
        <NavigationContainer >
            {
                !checkOnboarding ? <OnboardingScreens />:  <DashBoardBottomTabs /> 
            }
           
        </NavigationContainer>

    )
}

export default Navigation