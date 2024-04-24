import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './AppButton';

const NetworkError = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.text}>
        There is no internet connection. Enable mobile data or Wi-Fi to use the
        application.
      </Text>
      <AppButton title="Try again" styles={{width: 160}} variant="primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 280,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(20, 20, 20, 1)',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: 'rgba(20, 20, 20, 1)',
    marginBottom: 12,
  },
});

export default NetworkError;
