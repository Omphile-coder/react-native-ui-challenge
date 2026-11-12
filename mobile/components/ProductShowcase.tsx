import { Image, StyleSheet, View } from "react-native";
import type { ProductType } from "./ProductSelectors";

type ProductShowcaseProps = {
  selectedType: ProductType;
};

const productImages = {
  Relax: require("../assets/images/xefag-relax.png"),
  Sleep: require("../assets/images/xefag-sleep.png"),
};

export default function ProductShowcase({
  selectedType,
}: ProductShowcaseProps) {
  const imageStyle =
    selectedType === "Sleep" ? styles.sleepImage : styles.relaxImage;

  return (
    <View style={styles.container}>
      <Image
        source={productImages[selectedType]}
        style={[styles.productImage, imageStyle]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  productImage: {
    maxWidth: 320,
    maxHeight: 420,
  },

  // Relax asset
  relaxImage: {
    width: "63%",
    height: "63%",
  },

  // Sleep asset includes more empty/petal space, so scale it up
  sleepImage: {
    width: "72%",
    height: "72%",
  },
});
