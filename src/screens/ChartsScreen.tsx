import React from 'react';
import { Text, StyleSheet } from 'react-native';
import RadarChart from '../components/RaderChart';
import BarChart from '../components/BarChart';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#666666',
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20
  }
});

const ChartScreen = ({ navigation }) => {
  const badges = navigation.getParam('badges', []);

  return (
    <>
      <Text style={styles.title}>スコアバランス</Text>
      <RadarChart badges={badges} />
      <Text style={styles.title}>それぞれのスコア</Text>
      <BarChart badges={badges} />
    </>
  );
};

export default ChartScreen;
