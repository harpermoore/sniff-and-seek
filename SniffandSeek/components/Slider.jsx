import { View, StyleSheet, Text } from "react-native";
import { useState, useRef } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";

export default function Slider({ name, pictures }) {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={pictures}
        renderItem={({ item, index }) => (
          <SliderItem imgUri={item.large.url} scrollX={scrollX} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        removeClippedSubviews={false}
      />
      <Pagination
        paginationIndex={paginationIndex}
        scrollX={scrollX}
        items={pictures}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
