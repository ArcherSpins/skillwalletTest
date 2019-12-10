import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  Text
} from 'react-native';

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
    fontSize: 10
  },
  subtitle: {
    fontSize: 14
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
        onPress={() => navigation.navigate('CloudCerts', { uri: cloudcerts })}>
        <Image
          source={{ uri: image }}
          style={[
            styles.badge,
            { width: width * size * 0.1, height: width * size * 0.1 }
          ]}
        />
      </TouchableOpacity>
      {showTitle(titled, title, subtitle)}
    </View>
  );
};
export default Badge;
