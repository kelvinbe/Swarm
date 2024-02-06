import React from 'react'
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
import { useState } from "react";
import { Button } from "@rneui/base";
import Animated, { withTiming } from 'react-native-reanimated';
import { useSharedValue, withSpring, useAnimatedStyle, useAnimatedProps } from 'react-native-reanimated';
import { transform } from 'lodash';
import { Circle, Svg } from 'react-native-svg';




const Swarms = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const r = useSharedValue(20)

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)

  const handlePress = () => {
    r.value += 10;
  };



  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value)
  }))

  
  return (
    <>
  <Svg style={styles.svg}>
    <AnimatedCircle cx='50%' cy='50%' r={r} fill='blue' animatedProps={animatedProps}/>
  </Svg>
  <Button onPress={handlePress} title="Click me" />
  </>
  )
  
};

export default Swarms;

const styles = StyleSheet.create({

  box: {
    width: 120,
    height: 120,
    backgroundColor: 'violet',
    borderRadius: 20,
    marginVertical: 50
  }, svg: {
    height: 250,
    width: '100%',
  },

})
