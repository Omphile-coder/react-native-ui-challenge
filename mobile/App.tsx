import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Main yellow product section */}
      <View style={styles.productSection}>
        <Text style={styles.placeholder}>Product Section</Text>
      </View>

      {/* Bottom white information panel */}
      <View style={styles.infoSection}>
        <Text style={styles.productName}>Relax 30</Text>

        <Text style={styles.productName}>Dissolvable Wafers</Text>

        <Text style={styles.weight}>250 mg</Text>

        <Text style={styles.price}>$25.50</Text>
      </View>
    </View>
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
    justifyContent: "center",
    alignItems: "center",
  },

  placeholder: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111111",
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
