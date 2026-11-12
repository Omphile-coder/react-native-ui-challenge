import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

import { SymbolView } from "expo-symbols";
import type { ProductType } from "./ProductSelectors";

// Icons for each platform
const icons = {
  back: {
    ios: "chevron.left",
    android: "arrow_back",
    web: "arrow_back",
  },
  profile: {
    ios: "person",
    android: "person",
    web: "person",
  },
  cart: {
    ios: "basket",
    android: "shopping_basket",
    web: "shopping_basket",
  },
} as const;

// Product theme configurations
const themes = {
  Relax: {
    logoColor: "#111111",

    backButtonBg: "#FFFFFF",
    backIconColor: "#111111",

    profileButtonBg: "#E3A000",
    profileIconColor: "#FFFFFF",

    cartButtonBg: "#FFFFFF",
    cartIconColor: "#111111",
  },

  Sleep: {
    logoColor: "#FFFFFF",

    backButtonBg: "#8F1F3B",
    backIconColor: "#FFFFFF",

    profileButtonBg: "#8F1F3B",
    profileIconColor: "#FFFFFF",

    cartButtonBg: "#FFFFFF",
    cartIconColor: "#111111",
  },
};

// Reusable button properties
type HeaderButtonProps = {
  icon: keyof typeof icons;
  label: string;
  onPress: () => void;
  backgroundColor: string;
  iconColor: string;
  badgeCount?: number;
};

// Reusable circular button
function HeaderButton({
  icon,
  label,
  onPress,
  backgroundColor,
  iconColor,
  badgeCount,
}: HeaderButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.circleButton,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      <SymbolView name={icons[icon]} size={22} tintColor={iconColor} />

      {badgeCount !== undefined && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </Pressable>
  );
}

// Header component properties
type ProductHeaderProps = {
  selectedType: ProductType;
};

export default function ProductHeader({ selectedType }: ProductHeaderProps) {
  // Get theme based on selected product
  const theme = themes[selectedType];

  return (
    <View style={styles.header}>
      {/* Left: Back button and logo */}
      <View style={styles.brandGroup}>
        <HeaderButton
          icon="back"
          label="Go back"
          backgroundColor={theme.backButtonBg}
          iconColor={theme.backIconColor}
          onPress={() => Alert.alert("Back", "Navigation comes later.")}
        />

        <View style={styles.logo}>
          <Image
            source={require("../assets/images/logo.png")}
            style={[styles.logoImage, { tintColor: theme.logoColor }]}
            resizeMode="contain"
          />

          <Text style={[styles.logoText, { color: theme.logoColor }]}>
            xefag
          </Text>
        </View>
      </View>

      {/* Right: Profile and cart */}
      <View style={styles.actions}>
        <HeaderButton
          icon="profile"
          label="Profile"
          backgroundColor={theme.profileButtonBg}
          iconColor={theme.profileIconColor}
          onPress={() => Alert.alert("Profile", "Coming soon.")}
        />

        <HeaderButton
          icon="cart"
          label="Shopping cart"
          badgeCount={3}
          backgroundColor={theme.cartButtonBg}
          iconColor={theme.cartIconColor}
          onPress={() => Alert.alert("Cart", "Coming soon.")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  brandGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  logoImage: {
    width: 36,
    height: 36,
  },

  logoText: {
    fontSize: 27,
    fontWeight: "700",
    fontFamily: "Georgia",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  circleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.65,
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -3,
    backgroundColor: "#111111",
    minWidth: 17,
    height: 17,
    paddingHorizontal: 3,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
});
