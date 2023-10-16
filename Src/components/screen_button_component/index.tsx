/* eslint-disable prettier/prettier */
import {Text, View, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
type screenProps = {
  children: React.ReactNode;
  onPress: () => void;
};
const ScreenButtonComponent = ({children, onPress}: screenProps) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.button : null)}
      onPress={onPress}>
      <View style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ScreenButtonComponent;
