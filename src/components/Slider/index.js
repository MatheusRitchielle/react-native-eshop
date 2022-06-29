import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensios,
} from "react-native";

const { widht } = Dimensions.get("window");
const images = [
  {
    id: 1,
    url: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-af-11-masculino-DB2576-001-1-11627399691.jpg",
  },
];

const OnBoardingItem = ({ item }) => {
  return <Image source={{ uri: item.url }} style={styles.image} />;
};
const Slider = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{ maxHeight: widht }}
        paddingEnable
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ item }) => <OnBoardingItem item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    widht,
    height: widht,
  },
});
export default Slider;
