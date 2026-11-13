
import { useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  type LayoutChangeEvent,
} from "react-native";

type ProductShowcaseProps = {
  transition: Animated.Value;
};

const productImages = {
  Relax: require("../assets/images/xefag-relax.png"),
  Sleep: require("../assets/images/xefag-sleep.png"),
};

export default function ProductShowcase({
  transition,
}: ProductShowcaseProps) {
  const [imageSize, setImageSize] = useState(0);

  // Keep the image frame responsive
  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    const size = Math.round(
      Math.min(width * 0.85, height * 0.92, 340)
    );

    setImageSize((current) =>
      current === size ? current : size
    );
  };

  // Relax fades out as Sleep fades in
  const relaxOpacity = transition.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View
      style={styles.container}
      onLayout={handleLayout}
    >
      <View
        style={[
          styles.imageFrame,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}
      >
        {/* Relax bottle */}
        <Animated.Image
          source={productImages.Relax}
          style={[
            styles.productImage,
            { opacity: relaxOpacity },
          ]}
          resizeMode="contain"
        />

        {/* Sleep bottle */}
        <Animated.Image
          source={productImages.Sleep}
          style={[
            styles.productImage,
            { opacity: transition },
          ]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  imageFrame: {
    position: "relative",
    alignSelf: "center",
  },

  productImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
