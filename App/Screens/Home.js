import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import SearchBar from "../Components/Home/SearchBar";
import Colors from "../Shared/Colors";
import OtherServicesList from "../Components/Home/OtherServicesList";
import PerformanceDashboardList from "../Components/Home/PerformanceDashboardList";
import Subtract from "../Components/Home/Subtract";

export default function Home({ navigation }) {
  return (
    <FlatList
      data={[{}]} // Dummy data to render a single list item
      renderItem={() => (
        <View>
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>
          <Subtract/>
          <PerformanceDashboardList />
          <OtherServicesList />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: Colors.SECOND_PRIMARY,
  },
});