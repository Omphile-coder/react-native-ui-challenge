
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import type {
  ProductType,
  ProductVariant,
} from "./ProductSelectors";

type ProductInfoProps = {
  selectedType: ProductType;
  selectedVariant: ProductVariant;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onBuyNow: () => void;
};

// Reusable quantity button
type QuantityButtonProps = {
  symbol: "+" | "−";
  onPress: () => void;
  disabled?: boolean;
};

function QuantityButton({
  symbol,
  onPress,
  disabled = false,
}: QuantityButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={
        symbol === "+"
          ? "Increase quantity"
          : "Decrease quantity"
      }
      style={({ pressed }) => [
        styles.quantityButton,
        disabled && styles.disabledButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.quantitySymbol}>
        {symbol}
      </Text>
    </Pressable>
  );
}

export default function ProductInfo({
  selectedType,
  selectedVariant,
  quantity,
  onIncrease,
  onDecrease,
  onBuyNow,
}: ProductInfoProps) {
  return (
    <View style={styles.container}>
      {/* Product information */}
      <Text style={styles.productName}>
        {selectedType} {selectedVariant}
        {"\n"}
        Dissolvable Wafers
      </Text>

      <Text style={styles.weight}>
        250 mg
      </Text>

      {/* Price and quantity controls */}
      <View style={styles.purchaseRow}>
        <Text style={styles.price}>
          $25.50
        </Text>

        <View style={styles.quantityControls}>
          <QuantityButton
            symbol="−"
            onPress={onDecrease}
            disabled={quantity <= 1}
          />

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          <QuantityButton
            symbol="+"
            onPress={onIncrease}
          />
        </View>
      </View>

      {/* Purchase button */}
      <Pressable
        onPress={onBuyNow}
        accessibilityRole="button"
        accessibilityLabel="Buy Now"
        style={({ pressed }) => [
          styles.buyButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.buyButtonText}>
          Buy Now
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 18,
  },

  productName: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111111",
    lineHeight: 36,
    letterSpacing: -0.8,
  },

  weight: {
    fontSize: 17,
    color: "#777777",
    marginTop: 12,
  },

  purchaseRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 26,
  },

  price: {
    fontSize: 31,
    fontWeight: "700",
    color: "#111111",
    letterSpacing: -0.8,
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },

  quantitySymbol: {
    fontSize: 24,
    color: "#FFC821",
    fontWeight: "400",
    lineHeight: 27,
  },

  quantity: {
    fontSize: 25,
    fontWeight: "500",
    color: "#111111",
    minWidth: 20,
    textAlign: "center",
  },

  disabledButton: {
    opacity: 0.4,
  },

  buyButton: {
    backgroundColor: "#FFCB27",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  buyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  pressed: {
    opacity: 0.7,
  },
});
