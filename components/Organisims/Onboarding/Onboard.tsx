import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import React, { useEffect } from "react";
import data from "../../../dataa/data.js";
import Pagination from "../../Organisims/Pagination/Pagination.tsx";
import CustomButton from "../../Atoms/Buttons/CustomButton.tsx";


const Onboard = ({setIsFirstTime}) => {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0)
  const flatListRef = useAnimatedRef(null)
  const onViewableItemsChanged = ({viewableItems}) => {
    flatListIndex.value = viewableItems[0].index
  }
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  const { width: SCREEN_WIDTH } = useWindowDimensions();


  const RenderItem = ({ item, index }) => {

    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100]
      );

      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.6,
        height: SCREEN_WIDTH * 0.6,
        transform: [
          {
            translateY: translateYAnimation,
          },
        ],
      };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
          x.value,
          [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          [0, 1, 0],
          Extrapolation.CLAMP
        );
        const translateYAnimation = interpolate(
          x.value,
          [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          [100, 0, 100]
        );
  
        return {
          opacity: opacityAnimation,
          transform: [
            {
              translateY: translateYAnimation,
            },
          ],
        };
      });



  

    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item, index }) => {
          return <RenderItem index={index} item={item} />;
        }}
      />
      <View style={styles.bottomContainer}> 
        <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH}/>
        <CustomButton setIsFirstTime={setIsFirstTime} flatListRef={flatListRef} flatListIndex={flatListIndex} dataLength={data.length} />
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89CFF0",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#89CFF0",
  },
  itemText: {
    color: "white",
    textAlign: "center",
    lineHeight: 20,
    marginHorizontal: 35,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  }
});
