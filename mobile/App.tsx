import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ProductHeader from "./components/ProductHeader";
import ProductSelectors, {
  type ProductType,
  type ProductVariant,
} from "./components/ProductSelectors";
import ProductShowcase from "./components/ProductShowcase";

export default function App() {
  // Product selection state
  const [selectedType, setSelectedType] = useState<ProductType>("Relax");

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(30);

  const productBackground = selectedType === "Sleep" ? "#C82C50" : "#FFC821";

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { backgroundColor: productBackground }]}>
        <StatusBar style="dark" />

        {/* Main yellow product section */}
        <View
          style={[
            styles.productSection,
            { backgroundColor: productBackground },
          ]}
        >
          {/* Header */}
          <SafeAreaView edges={["top"]}>
            <ProductHeader />
          </SafeAreaView>

          {/* Product display area */}
          <View style={styles.stage}>
            {/* Interactive selectors */}
            <View style={styles.selectorsOverlay}>
              <ProductSelectors
                selectedType={selectedType}
                selectedVariant={selectedVariant}
                onTypeChange={setSelectedType}
                onVariantChange={setSelectedVariant}
              />
            </View>

            {/* Xefag product image */}
            <ProductShowcase selectedType={selectedType} />
          </View>
        </View>

        {/* White product information panel */}
        <View style={styles.infoSection}>
          <Text style={styles.productName}>
            {selectedType} {selectedVariant}
          </Text>

          <Text style={styles.productName}>Dissolvable Wafers</Text>

          <Text style={styles.weight}>250 mg</Text>

          <Text style={styles.price}>$25.50</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC821",
  },

  // Main yellow section
  productSection: {
    flex: 1,
    backgroundColor: "#FFC821",
  },

  // Product image and selectors container
  stage: {
    flex: 1,
    width: "100%",
    minHeight: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  // Selectors appear above the product image
  selectorsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  // Bottom white information panel
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 30,
  },

  productName: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111111",
  },

  weight: {
    fontSize: 17,
    color: "#777777",
    marginTop: 12,
  },

  price: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111111",
    marginTop: 24,
  },
});
