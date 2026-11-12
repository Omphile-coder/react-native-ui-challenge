
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import ProductHeader from "./components/ProductHeader";
import ProductSelectors, {
  type ProductType,
  type ProductVariant,
} from "./components/ProductSelectors";

export default function App() {
  // State for product selections
  const [selectedType, setSelectedType] =
    useState<ProductType>("Relax");

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant>(30);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="dark" />

        {/* Main product area */}
        <View style={styles.productSection}>
          <SafeAreaView edges={["top"]}>
            <ProductHeader />
          </SafeAreaView>

          {/* Interactive product selectors */}
          <ProductSelectors
            selectedType={selectedType}
            selectedVariant={selectedVariant}
            onTypeChange={setSelectedType}
            onVariantChange={setSelectedVariant}
          />

          {/* Product showcase placeholder */}
          <View style={styles.showcase}>
            <Text style={styles.placeholder}>
              Product Section
            </Text>

            <Text style={styles.selectionText}>
              Selected: {selectedType} {selectedVariant}
            </Text>
          </View>
        </View>

        {/* Product information */}
        <View style={styles.infoSection}>
          <Text style={styles.productName}>
            Relax 30
          </Text>

          <Text style={styles.productName}>
            Dissolvable Wafers
          </Text>

          <Text style={styles.weight}>
            250 mg
          </Text>

          <Text style={styles.price}>
            $25.50
          </Text>
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

  productSection: {
    flex: 1,
    backgroundColor: "#FFC821",
  },

  showcase: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  placeholder: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111111",
  },

  selectionText: {
    fontSize: 15,
    color: "#725500",
    marginTop: 12,
  },

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
