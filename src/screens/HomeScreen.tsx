import React from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from '../components/Profile';
import Score from '../components/Score';
import BadgeArea from '../components/BadgeArea';
import useInitialEffect from '../hooks/initialEffect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const HomeScreen = ({ navigation }) => {
  const { profile, badges } = useInitialEffect();
  return (
    <View style={styles.container}>
      <Profile flexRatio={3} profile={profile} />
      <Score flexRatio={1} badges={badges} navigation={navigation} />
      <BadgeArea flexRatio={6} badges={badges} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
