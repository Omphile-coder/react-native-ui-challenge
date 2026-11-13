
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import type {
  ProductType,
  ProductVariant,
} from "./ProductSelectors";

// Product information props
type ProductInfoProps = {
  selectedType: ProductType;
  selectedVariant: ProductVariant;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onBuyNow: () => void;
};

// Theme configurations
const themes = {
  Relax: {
    quantityButtonBg: "#111111",
    quantitySymbol: "#FFC821",
    buyButtonBg: "#FFCB27",
    buyButtonText: "#111111",
  },

  Sleep: {
    quantityButtonBg: "#8F1F3B",
    quantitySymbol: "#FFFFFF",
    buyButtonBg: "#C82C50",
    buyButtonText: "#FFFFFF",
  },
};

// Reusable quantity button props
type QuantityButtonProps = {
  icon: "plus-square-o" | "minus-square-o";
  onPress: () => void;
  backgroundColor: string;
  iconColor: string;
  disabled?: boolean;
};

// Reusable quantity button
function QuantityButton({
  icon,
  onPress,
  backgroundColor,
  iconColor,
  disabled = false,
}: QuantityButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={
        icon === "plus-square-o"
          ? "Increase quantity"
          : "Decrease quantity"
      }
      style={({ pressed }) => [
        styles.quantityButton,
        { backgroundColor },
        disabled && styles.disabledButton,
        pressed && styles.pressed,
      ]}
    >
      <FontAwesome
        name={icon}
        size={24}
        color={iconColor}
      />
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
  // Select the theme based on the active product
  const theme = themes[selectedType];

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
          {/* Decrease quantity */}
          <QuantityButton
            icon="minus-square-o"
            onPress={onDecrease}
            disabled={quantity <= 1}
            backgroundColor={theme.quantityButtonBg}
            iconColor={theme.quantitySymbol}
          />

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          {/* Increase quantity */}
          <QuantityButton
            icon="plus-square-o"
            onPress={onIncrease}
            backgroundColor={theme.quantityButtonBg}
            iconColor={theme.quantitySymbol}
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
          {
            backgroundColor: theme.buyButtonBg,
          },
          pressed && styles.pressed,
        ]}
      >
        <Text
          style={[
            styles.buyButtonText,
            { color: theme.buyButtonText },
          ]}
        >
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
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  buyButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.7,
  },
});
