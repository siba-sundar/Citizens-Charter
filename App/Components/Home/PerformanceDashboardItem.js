import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../../Shared/Colors"; // Ensure the path is correct

export default function PerformanceDashboardItem({ category }) {
  if (!category || !category.icon || !category.name) {
    console.warn("Missing data in category:", category);
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Image source={category.icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    width: 170,
    height: 130,
    backgroundColor: Colors.WHITE,
    justifyContent: "space-between",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    color: "#000",
  },
});