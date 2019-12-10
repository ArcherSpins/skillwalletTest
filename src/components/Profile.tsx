import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  View
} from 'react-native';
import { normalize } from '../helpers/normalizeFontSize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    marginBottom: normalize(85)
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    overflow: 'hidden',
    borderWidth: 0,
    position: 'absolute',
    top: height * 0.03
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  nameText: {
    fontSize: normalize(22)
  },
  accountText: {
    fontSize: normalize(14),
    color: '#666666'
  },
  organizationText: {
    fontSize: normalize(16),
    color: '#00CED6',
    fontWeight: '500'
  }
});

const Profile = ({ flexRatio, profile }) => {
  const { name, image, account, organization } = profile || {
    name: '',
    image: '',
    account: '',
    organization: ''
  };
  return (
    <View style={[styles.container, { flex: flexRatio }]}>
      <ImageBackground
        source={require('../../assets/images/BG-sample.png')}
        style={styles.backgroundImage}
        imageStyle={{ width: '100%', height: 'auto' }}
      />
      {
        image ? (
          <Image
            style={styles.profileImage}
            source={{ uri: image }}
            resizeMode='cover'
          />
        ) : <ActivityIndicator size="large" color="#00CED6" />
      }
      <View style={styles.textWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.accountText}>{account}</Text>
        <Text style={styles.organizationText}>{organization}</Text>
      </View>
    </View>
  );
};

export default Profile;
