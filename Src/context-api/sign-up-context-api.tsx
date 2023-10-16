import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';

 export type SignUpContextProps = {
  fullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  genderOfPerson:string;
  setGenderOfPerson:Dispatch<SetStateAction<string>>;
  selectDate:string;
  setSelectDate:Dispatch<SetStateAction<string>>;
  personHeight: string; 
  setPersonHeight:Dispatch<SetStateAction<string>>;
  personWeight: string; 
  setPersonWeight:Dispatch<SetStateAction<string>>;
  measuremets: string; 
  setMeasurements:Dispatch<SetStateAction<string>>;
  workoutFrequency: string; 
  setWorkoutFrequency:Dispatch<SetStateAction<string>>;
  workoutDuration: string; 
  setWorkoutDuration:Dispatch<SetStateAction<string>>;
  goalList: string; 
  setGoalList:Dispatch<SetStateAction<string>>;
  checkOnboarding: boolean; 
  setCheckOnboarding:Dispatch<SetStateAction<boolean>>;
};

export const signUpDetailContext = createContext<SignUpContextProps>({
 
  fullName: '',
  setFullName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  genderOfPerson:'',
  setGenderOfPerson:()=>{},
  selectDate:'',
  setSelectDate:()=>{},
  personHeight:'',
  setPersonHeight:()=>{},
  personWeight:'',
  setPersonWeight:()=>{},
  measuremets:'',
  setMeasurements:()=>{},
  workoutFrequency:'',
  setWorkoutFrequency:()=>{},
  workoutDuration:'',
  setWorkoutDuration:()=>{},
  goalList:'',
  setGoalList:()=>{},
  checkOnboarding:false,
  setCheckOnboarding:()=>{}
});

type PersonalDetailContextProps = {
  children: ReactNode;
};

const SignUpContextApi = ({ children,}: PersonalDetailContextProps) => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [genderOfPerson, setGenderOfPerson] = useState<string>('Gender')
    const [selectDate, setSelectDate] = useState<string>('BirthDate (optional)');
    const [personHeight, setPersonHeight] = useState<string>('');
    const [personWeight, setPersonWeight] = useState<string>('');
    const [measuremets, setMeasurements] = useState<string>('1');
    const [workoutFrequency, setWorkoutFrequency] = useState<string>('1');
    const [workoutDuration, setWorkoutDuration] = useState<string>('1');
    const [goalList, setGoalList] = useState<string>('');
    const [checkOnboarding, setCheckOnboarding] = useState<boolean>(false);

    const value: SignUpContextProps = {
     
      fullName,
      setFullName,
      email,
      setEmail,
      password,
      setPassword,
      genderOfPerson,
      setGenderOfPerson,
      selectDate,
      setSelectDate,
      personHeight,
      setPersonHeight,
      personWeight,
      setPersonWeight,
      measuremets,
      setMeasurements,
      workoutFrequency,
      setWorkoutFrequency,
      workoutDuration,
      setWorkoutDuration,
      goalList,
      setGoalList,
      checkOnboarding,
      setCheckOnboarding
    };
  
    return (
      <View style={{ flex: 1 }}>
        <signUpDetailContext.Provider value={value}>
          {children}
        </signUpDetailContext.Provider>
      </View>
  )
}

export default SignUpContextApi