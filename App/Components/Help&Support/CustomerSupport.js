import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CustomerSupport() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Customer Support</Text>
      <View style={styles.contactMethods}>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.buttonText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.buttonText}>Email Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.buttonText}>Chat with Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactMethods: {
    width: "100%",
    alignItems: "center",
  },
  contactButton: {
    width: "90%",
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
