import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Shared/Colors';

const KpiDetailContent = ({ activeCategory }) => {
  // More detailed content mapping
  const kpiContent = {
    1: {
      title: "Postal Network Reimagined",
      description: "Transforming postal infrastructure to meet modern communication needs.",
      details: "Comprehensive strategy to modernize postal services and expand digital capabilities."
    },
    2: {
      title: "Mails",
      description: "Enhancing mail communication efficiency and reach.",
      details: "Advanced mail sorting and delivery systems to improve overall postal performance."
    },
    3: {
      title: "Citizen Centric Services",
      description: "Focusing on delivering user-friendly and accessible postal services.",
      details: "Prioritizing customer experience and accessibility in all postal service interactions."
    },
    4: {
      title: "Aspirational Districts",
      description: "Extending postal services to underserved and remote areas.",
      details: "Targeted approach to improve postal infrastructure in challenging geographical regions."
    },
    5: {
      title: "Public Grievances",
      description: "Efficient management and resolution of public complaints.",
      details: "Streamlined system for addressing and resolving customer concerns effectively."
    }
  };

  // Fallback to first item if no match
  const content = kpiContent[activeCategory] || kpiContent[1];

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{content.title}</Text>
      <Text style={styles.descriptionText}>{content.description}</Text>
      <Text style={styles.detailsText}>{content.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40, // Subtract horizontal padding
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 14,
    color: Colors.BLACK,
  }
});

export default KpiDetailContent;