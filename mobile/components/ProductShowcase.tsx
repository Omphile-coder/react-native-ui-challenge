
import { Image, StyleSheet, View } from "react-native";
import type { ProductType } from "./ProductSelectors";

// Define the available product images
const productImages = {
  Relax: require("../assets/images/xefag-relax.png"),
  Sleep: require("../assets/images/xefag-sleep.png"),
};

type ProductShowcaseProps = {
  selectedType: ProductType;
};

export default function ProductShowcase({
  selectedType,
}: ProductShowcaseProps) {
  return (
    <View style={styles.container}>
      <Image
        source={productImages[selectedType]}
        style={styles.productImage}
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
    width: "85%",
    height: "85%",
  },
});
