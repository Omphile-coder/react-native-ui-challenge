import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Animated, Easing, StyleSheet, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ProductHeader from "./components/ProductHeader";

import ProductSelectors, {
  type ProductType,
  type ProductVariant,
} from "./components/ProductSelectors";

import ProductShowcase from "./components/ProductShowcase";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  // Product selection state
  const [selectedType, setSelectedType] = useState<ProductType>("Relax");

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(30);

  // Quantity state
  const [quantity, setQuantity] = useState(2);

  // Animation progress:
  // 0 = Relax
  // 1 = Sleep
  const transition = useRef(new Animated.Value(0)).current;

  // Animate when the selected product changes
  useEffect(() => {
    const animation = Animated.timing(transition, {
      toValue: selectedType === "Sleep" ? 1 : 0,
      duration: 450,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    });

    animation.start();

    return () => animation.stop();
  }, [selectedType, transition]);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  // Decrease quantity (minimum 1)
  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  // Temporary checkout interaction
  const handleBuyNow = () => {
    Alert.alert(
      "Demo Checkout",
      `You selected ${quantity} x ${selectedType} ${selectedVariant}.\n\nCheckout is not implemented yet.`,
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style={selectedType === "Sleep" ? "light" : "dark"} />

        {/* Main product screen */}
        <View style={styles.productCard}>
          {/* Upper product area */}
          <View style={styles.productSection}>
            {/* Animated magenta background */}

            {/* Animated Sleep background */}
            <Animated.View
              pointerEvents="none"
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: "#C82C50",
                  opacity: transition,
                },
              ]}
            />

            {/* Product header */}
            <SafeAreaView edges={["top"]}>
              <ProductHeader selectedType={selectedType} />
            </SafeAreaView>

            {/* Product display area */}
            <View style={styles.stage}>
              {/* Relax / Sleep and variants */}
              <View style={styles.selectorsOverlay}>
                <ProductSelectors
                  selectedType={selectedType}
                  selectedVariant={selectedVariant}
                  onTypeChange={setSelectedType}
                  onVariantChange={setSelectedVariant}
                />
              </View>

              {/* Animated product images */}
              <ProductShowcase transition={transition} />
            </View>
          </View>

          {/* White product information panel */}
          <SafeAreaView edges={["bottom"]} style={styles.infoSection}>
            <ProductInfo
              selectedType={selectedType}
              selectedVariant={selectedVariant}
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onBuyNow={handleBuyNow}
            />
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Full-screen product layout
  productCard: {
    flex: 1,
    margin: 0,
    borderRadius: 0,
    overflow: "hidden",
  },

  // Yellow is our default background.
  // The animated magenta layer fades over it.
  productSection: {
    flex: 1,
    minHeight: 0,
    backgroundColor: "#FFC821",
    overflow: "hidden",
  },

  // Product display area
  stage: {
    flex: 1,
    minHeight: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // Keep selectors in their original position
  selectorsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  // Rounded white product information panel
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -14,
  },
});
