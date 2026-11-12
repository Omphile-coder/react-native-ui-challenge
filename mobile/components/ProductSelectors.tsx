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

// Custom PNG icons
const tabIcons = {
  Relax: require("../assets/images/Lotus Petal Circle Icon.png"),
  Sleep: require("../assets/images/Crescent Moon with Three Stars.png"),
};

// Theme configurations
const themes = {
  Relax: {
    activeText: "#111111",
    inactiveText: "#92721D",

    activeVariantBg: "#111111",
    activeVariantText: "#FFCA26",

    inactiveVariantBg: "rgba(0,0,0,0.18)",
    inactiveVariantText: "#6F5A1B",

    activeIconTint: "#111111",
    inactiveIconTint: "#92721D",
  },

  Sleep: {
    activeText: "#FFFFFF",
    inactiveText: "rgba(255,255,255,0.45)",

    activeVariantBg: "#FFFFFF",
    activeVariantText: "#C82C50",

    inactiveVariantBg: "rgba(0,0,0,0.18)",
    inactiveVariantText: "rgba(255,255,255,0.45)",

    activeIconTint: "#FFFFFF",
    inactiveIconTint: "rgba(255,255,255,0.45)",
  },
};

export default function ProductSelectors({
  selectedType,
  selectedVariant,
  onTypeChange,
  onVariantChange,
}: ProductSelectorsProps) {
  // Select the theme based on the active product
  const theme = themes[selectedType];

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
              {/* Custom PNG icon */}
              <Image
                source={tabIcons[type]}
                style={[
                  styles.tabIcon,
                  {
                    tintColor: isSelected
                      ? theme.activeIconTint
                      : theme.inactiveIconTint,
                  },
                ]}
                resizeMode="contain"
              />

              {/* Product label */}
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isSelected ? theme.activeText : theme.inactiveText,
                  },
                ]}
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
                {
                  backgroundColor: isSelected
                    ? theme.activeVariantBg
                    : theme.inactiveVariantBg,
                },
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={[
                  styles.variantText,
                  {
                    color: isSelected
                      ? theme.activeVariantText
                      : theme.inactiveVariantText,
                  },
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

  tabIcon: {
    width: 30,
    height: 30,
  },

  tabText: {
    fontSize: 15,
    fontWeight: "500",
  },

  variantColumn: {
    gap: 9,
    alignItems: "center",
  },

  variantButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  variantText: {
    fontSize: 20,
    fontWeight: "500",
  },

  pressed: {
    opacity: 0.65,
  },
});
