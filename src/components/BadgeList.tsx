import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Badge from './Badge';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

const showBadgeList = (badges, navigation, size, titled) => {
  if (!badges || badges.length === 0) return <></>;
  return badges.map(badge => (
    <Badge
      navigation={navigation}
      badge={badge}
      size={size}
      key={badge.cloudcerts}
      titled={titled}
    />
  ));
};

const BadgeList = ({ navigation, badges, size, titled }) => (
  <View style={styles.container}>
    {showBadgeList(badges, navigation, size, titled)}
  </View>
);

export default BadgeList;
