import React, { useState } from "react";
import {
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

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
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={images}
        paddingEnable
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
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
