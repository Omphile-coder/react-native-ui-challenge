
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import ProductHeader from "./components/ProductHeader";
import ProductSelectors, {
  type ProductType,
  type ProductVariant,
} from "./components/ProductSelectors";
import ProductShowcase from "./components/ProductShowcase";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  // Product state
  const [selectedType, setSelectedType] =
    useState<ProductType>("Relax");

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant>(30);

  // Quantity state
  const [quantity, setQuantity] = useState(2);

  // Dynamic product background
  const productBackground =
    selectedType === "Sleep"
      ? "#C82C50"
      : "#FFC821";

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  // Decrease quantity (minimum 1)
  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  // Temporary checkout interaction
  const handleBuyNow = () => {
    Alert.alert(
      "Demo Checkout",
      `You selected ${quantity} x ${selectedType} ${selectedVariant}.\n\nCheckout is not implemented yet.`
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="dark" />

        {/* Main rounded product screen */}
        <View
          style={[
            styles.productCard,
            { backgroundColor: productBackground },
          ]}
        >
          {/* Upper product area */}
          <View
            style={[
              styles.productSection,
              { backgroundColor: productBackground },
            ]}
          >
            <SafeAreaView edges={["top"]}>
              <ProductHeader selectedType={selectedType} />
            </SafeAreaView>

            <View style={styles.stage}>
              {/* Product tabs and variants */}
              <View style={styles.selectorsOverlay}>
                <ProductSelectors
                  selectedType={selectedType}
                  selectedVariant={selectedVariant}
                  onTypeChange={setSelectedType}
                  onVariantChange={setSelectedVariant}
                />
              </View>

              {/* Product image */}
              <ProductShowcase
                selectedType={selectedType}
              />
            </View>
          </View>

          {/* Bottom product information */}
          <SafeAreaView
            edges={["bottom"]}
            style={styles.infoSection}
          >
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
  // Light background
 container: {
  flex: 1,
  backgroundColor: "#FFFFFF",
},

  // Entire  screen
productCard: {
  flex: 1,
  margin: 0,
  borderRadius: 0,
  overflow: "hidden",
},

  productSection: {
    flex: 1,
    minHeight: 0,
  },

  // Product display area
  stage: {
    flex: 1,
    minHeight: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // Floating product selectors
  selectorsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  // Rounded white panel
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -14,
  },
});
