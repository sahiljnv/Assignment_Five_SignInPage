import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { signUpDetailContext } from '../ContextApi/SignUpContextApi';
import OnboardingScreens from './OnboardingScreens';
import DashBoardBottomTabs from './DashBoardBottomTabs';

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