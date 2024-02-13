import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolation
} from 'react-native-reanimated'

const Pagination = ({data, x, screenWidth}) => {

    const PaginationComp = ({i}) => {
        const animatedDotsStyle = useAnimatedStyle(() => {
            const widthAnimation = interpolate(
                x.value,
                [
                    (i - 1) * screenWidth,
                    i * screenWidth,
                    (i + 1) * screenWidth
                ],
                [10, 20, 10],
                Extrapolation.CLAMP
            )
            return {
                width: widthAnimation
            }
        })
        return <Animated.View style={[styles.dots, animatedDotsStyle]}/>
    }


  return (
    <View style={styles.paginationContainer}>
      {data.map((_: any, i: React.Key | null | undefined) => {
        return <PaginationComp i={i} key={i} />
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dots: {
        width: 10,
        height: 10,
        backgroundColor: '#007FFF',
        marginHorizontal: 10,
        borderRadius: 5,

    }

})