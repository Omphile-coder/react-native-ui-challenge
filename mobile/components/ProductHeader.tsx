import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SymbolView } from "expo-symbols";

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

// TypeScript defines the allowed button properties
type HeaderButtonProps = {
  icon: keyof typeof icons;
  label: string;
  onPress: () => void;
  gold?: boolean;
  badgeCount?: number;
};

// Reusable circular button
function HeaderButton({
  icon,
  label,
  onPress,
  gold = false,
  badgeCount,
}: HeaderButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.circleButton,
        gold && styles.goldButton,
        pressed && styles.pressed,
      ]}
    >
      <SymbolView
        name={icons[icon]}
        size={22}
        tintColor={gold ? "#FFFFFF" : "#111111"}
      />

      {badgeCount !== undefined && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </Pressable>
  );
}


export default function ProductHeader() {
  return (
    <View style={styles.header}>
      {/* Left side: Back button and logo */}
      <View style={styles.brandGroup}>
        <HeaderButton
          icon="back"
          label="Go back"
          onPress={() =>
            Alert.alert("Back", "Navigation comes later.")
          }
        />

        <View style={styles.logo}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <Text style={styles.logoText}>
            xefag
          </Text>
        </View>
      </View>

      {/* Right side: Profile and shopping cart */}
      <View style={styles.actions}>
        <HeaderButton
          icon="profile"
          label="Profile"
          gold
          onPress={() =>
            Alert.alert("Profile", "Coming soon.")
          }
        />

        <HeaderButton
          icon="cart"
          label="Shopping cart"
          badgeCount={3}
          onPress={() =>
            Alert.alert("Cart", "Coming soon.")
          }
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

  // Xefag logo image
  logoImage: {
    width: 36,
    height: 36,
    tintColor: "#111111",
  },

  logoText: {
    fontSize: 27,
    fontWeight: "700",
    fontFamily: "Georgia",
    color: "#111111",
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
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  goldButton: {
    backgroundColor: "#E3A000",
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
