import React, { useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const images = [
  {
    id: 1,
    url: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-af-11-masculino-DB2576-001-1-11627399691.jpg",
  },
  {
    id: 2,
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-sportswear-air-max-terrascape-90-masculino-DH2973-001-4-41634137324.jpg",
  },
];

const OnBoardingItem = ({ item }) => {
  return <Image source={{ uri: item.url }} style={styles.image} />;
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{ maxHeight: width }}
        paddingEnable
        horizontal
        onMomentumScrollEnd={(event) => {
          setActiveIndex(parseInt(event.nativeEvent.contentOffset.x / width));
        }}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ item }) => String(item?.id)}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
      />
      {images.length > 1 ? (
        <View style={styles.dotsContainer}>
          {images.map((_, i) => (
            <View
              style={[
                styles.dot,
                { backgroundColor: i === activeIndex ? "green" : "gray" },
              ]}
            />
          ))}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: width,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 1,
  },
});
export default Slider;
