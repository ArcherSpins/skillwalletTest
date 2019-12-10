import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const CloudCerts = ({ navigation }) => (
  <WebView source={{ uri: navigation.getParam('uri', '') }} style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CloudCerts;
