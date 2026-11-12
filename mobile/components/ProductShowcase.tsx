import { useState } from "react";
import { Image, StyleSheet, View, type LayoutChangeEvent } from "react-native";

import type { ProductType } from "./ProductSelectors";

type ProductShowcaseProps = {
  selectedType: ProductType;
};

// Product images
const productImages = {
  Relax: require("../assets/images/xefag-relax.png"),
  Sleep: require("../assets/images/xefag-sleep.png"),
};

export default function ProductShowcase({
  selectedType,
}: ProductShowcaseProps) {
  const [imageSize, setImageSize] = useState(0);

  // Calculate a responsive image frame
  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    const size = Math.min(width * 0.85, height * 0.92, 340);

    setImageSize(size);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Image
        source={productImages[selectedType]}
        style={[
          styles.productImage,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  productImage: {
    alignSelf: "center",
  },
});
