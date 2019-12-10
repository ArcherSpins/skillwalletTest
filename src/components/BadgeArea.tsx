import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BadgeList from './BadgeList';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  all: {
    flex: 1
  },
  pickup: {
    flex: 2
  },
  title: {
    fontWeight: '500'
  }
});

const BadgeArea = ({ flexRatio, navigation, badges }) => {
  const officialBadges = badges
    ? badges.filter(badge => badge.type === 'official')
    : [];
  const altBadges = badges ? badges.filter(badge => badge.type === 'alt') : [];

  return (
    <View style={[styles.container, { flex: flexRatio }]}>
      <View style={styles.all}>
        <BadgeList
          navigation={navigation}
          badges={badges}
          size={1.5}
          titled={false}
        />
      </View>
      <View style={styles.pickup}>
        <Text style={styles.title}>主なオフィシャルバッジ</Text>
        <BadgeList
          navigation={navigation}
          badges={officialBadges}
          size={3}
          titled={true}
        />
      </View>
      <View style={styles.pickup}>
        <Text style={styles.title}>主なアルトバッジ</Text>
        <BadgeList
          navigation={navigation}
          badges={altBadges}
          size={3}
          titled={true}
        />
      </View>
    </View>
  );
};

export default BadgeArea;
