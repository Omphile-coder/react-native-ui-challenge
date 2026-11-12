import { Image, StyleSheet, View } from "react-native";

export default function ProductShowcase() {
  return (
    <View style={styles.container}>
      {/* Actual Xefag Relax product image */}
      <Image
        source={require("../assets/images/xefag-relax.png")}
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
