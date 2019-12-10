import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import { normalize } from '../helpers/normalizeFontSize';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  badge: {
    marginTop: 5,
    marginRight: 10
  },
  title: {
    fontSize: normalize(10)
  },
  subtitle: {
    fontSize: normalize(14)
  }
});

const showTitle = (titled, title, subtitle) => {
  if (!titled) return <></>;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const Badge = ({ navigation, badge, size, titled }) => {
  const { cloudcerts, image, title, subtitle } = badge || {
    cloudcerts: '',
    image: ''
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CloudCerts', { uri: cloudcerts })}
      >
        {
          image ? (
            <Image
              source={{ uri: image }}
              style={[
                styles.badge,
                { width: width * size * 0.075, height: width * size * 0.075 }
              ]}
            />
          ) : <ActivityIndicator size="small" color="#00CED6" />
        }
      </TouchableOpacity>
      {showTitle(titled, title, subtitle)}
    </View>
  );
};
export default Badge;
