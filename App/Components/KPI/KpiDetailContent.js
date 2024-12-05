import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const KpiDetailContent = ({ activeCategory, cardData = null }) => {
  // Sample Data Structure
  const kpiContent = {
    1: [
      {
        title: "Postal Network Reimagined - Region A",
        count: 1234567,
        lastUpdated: "Last updated 23 days ago",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        },
      },
      {
        title: "Postal Network Reimagined - Region B",
        count: 987654,
        lastUpdated: "Last updated 12 days ago",
        data: {
          labels: ["July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              data: [
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
              ],
            },
          ],
        },
      },
    ],
    2: [
      {
        title: "Mail Efficiency - Urban",
        count: 56789,
        lastUpdated: "Last updated 5 days ago",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
              ],
            },
          ],
        },
      },
      {
        title: "Mail Efficiency - Rural",
        count: 67890,
        lastUpdated: "Last updated 10 days ago",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 80,
                Math.random() * 80,
                Math.random() * 80,
                Math.random() * 80,
                Math.random() * 80,
                Math.random() * 80,
              ],
            },
          ],
        },
      },
    ],
  };

  // Determine content to render
  const content = cardData
    ? cardData
    : activeCategory
    ? kpiContent[activeCategory] || []
    : [];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {content.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            {item.count && <Text style={styles.countNumber}>{item.count}</Text>}
          </View>
          {item.lastUpdated && <Text style={styles.detailsText}>{item.lastUpdated}</Text>}
          {item.data && (
            <LineChart
              data={item.data}
              width={Dimensions.get("window").width - 80}
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: { borderRadius: 16 },
                propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" },
              }}
              bezier
              style={{ marginVertical: 8, borderRadius: 16 }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 250, // Extra padding to avoid cutoff
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flexWrap: "wrap",
    width: "65%",
  },
  countNumber: {
    width:"50%",
    fontSize: 24,
    fontWeight: "900",
    color: "#555",
  },
  detailsText: {
    fontSize: 12,
    color: "#777",
  },
});

export default KpiDetailContent;
