import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type ProductType = "Relax" | "Sleep";
export type ProductVariant = 30 | 60 | 90;

type ProductSelectorsProps = {
  selectedType: ProductType;
  selectedVariant: ProductVariant;
  onTypeChange: (type: ProductType) => void;
  onVariantChange: (variant: ProductVariant) => void;
};

const productTypes: ProductType[] = ["Relax", "Sleep"];
const variants: ProductVariant[] = [30, 60, 90];

// Local image assets for the product tabs
const tabIcons = {
  Relax: require("../assets/images/Lotus Petal Circle Icon.png"),
  Sleep: require("../assets/images/Crescent Moon with Three Stars.png"),
};

export default function ProductSelectors({
  selectedType,
  selectedVariant,
  onTypeChange,
  onVariantChange,
}: ProductSelectorsProps) {
  return (
    <View style={styles.container}>
      {/* Relax and Sleep tabs */}
      <View style={styles.tabs}>
        {productTypes.map((type) => {
          const isSelected = selectedType === type;

          return (
            <Pressable
              key={type}
              onPress={() => onTypeChange(type)}
              accessibilityRole="button"
              accessibilityLabel={`${type} product`}
              accessibilityState={{
                selected: isSelected,
              }}
              style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
            >
              {/* Custom image icon */}
              <Image
                source={tabIcons[type]}
                style={[styles.tabIcon, !isSelected && styles.inactiveIcon]}
                resizeMode="contain"
              />

              <Text
                style={[styles.tabText, !isSelected && styles.inactiveText]}
              >
                {type}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Product variant selectors */}
      <View style={styles.variantColumn}>
        {variants.map((variant) => {
          const isSelected = selectedVariant === variant;

          return (
            <Pressable
              key={variant}
              onPress={() => onVariantChange(variant)}
              accessibilityRole="button"
              accessibilityLabel={`Variant ${variant}`}
              accessibilityState={{
                selected: isSelected,
              }}
              style={({ pressed }) => [
                styles.variantButton,
                isSelected && styles.activeVariant,
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={[
                  styles.variantText,
                  isSelected && styles.activeVariantText,
                ]}
              >
                {variant}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    marginTop: 14,
  },

  tabs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingTop: 6,
  },

  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    minHeight: 42,
  },

  // Custom PNG icon styling
  tabIcon: {
    width: 30,
    height: 30,
    tintColor: "#111111",
  },

  inactiveIcon: {
    tintColor: "#92721D",
  },

  tabText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111111",
  },

  inactiveText: {
    color: "#92721D",
  },

  variantColumn: {
    gap: 9,
    alignItems: "center",
  },

  variantButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#C99D1C",
    alignItems: "center",
    justifyContent: "center",
  },

  activeVariant: {
    backgroundColor: "#111111",
  },

  variantText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFE17B",
  },

  activeVariantText: {
    color: "#FFCA26",
  },

  pressed: {
    opacity: 0.65,
  },
});
