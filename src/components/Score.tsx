import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sum } from '../lib/tools';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  scoreWrapper: {
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleText: {
    fontSize: 20
  },
  scoreText: {
    fontSize: 30,
    color: '#00CED6',
    fontWeight: '600',
    height: 40
  },
  scoreSubtext: {
    fontSize: 20,
    color: '#00CED6',
    fontWeight: '600'
  },
  toChart: {
    backgroundColor: '#00CED6',
    color: 'white',
    fontSize: 15,
    padding: 3
  }
});

const calcBadgeScore = badges => {
  if (!badges || badges.length === 0) return 0;
  return sum(badges, badge => sum(badge.score));
};

const Score = ({ flexRatio, badges, navigation }) => (
  <>
    <View style={[styles.container, { flex: flexRatio }]}>
      <View style={styles.scoreWrapper}>
        <Text style={styles.titleText}>スコア</Text>
        <Text style={styles.scoreText}>{calcBadgeScore(badges)}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Charts', { badges })}>
          <Text style={styles.toChart}>くわしく</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scoreWrapper}>
        <Text style={styles.titleText}>エールトークン</Text>
        <Text style={styles.scoreText}>
          1,300<Text style={styles.scoreSubtext}>ALE</Text>
        </Text>
      </View>
      <View style={styles.scoreWrapper}>
        <Text style={styles.titleText}>バッジ数</Text>
        <Text style={styles.scoreText}>{badges ? badges.length : 0}</Text>
      </View>
    </View>
  </>
);

export default Score;
