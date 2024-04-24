import React from 'react';
import {Pressable, StyleSheet, Text, ActivityIndicator} from 'react-native';
import theme from '../styles/theme';

const AppButton = ({
  title,
  loading = false,
  disabled = false,
  variant = 'primary',
  customStyles,
  onPress,
}) => {
  return (
    <Pressable
      disabled={loading || disabled}
      onPress={onPress}
      style={[
        styles.button,
        theme[variant],
        disabled ? styles.disabled : {},
        customStyles,
      ]}>
      {loading ? (
        <ActivityIndicator color={variant !== 'primary' ? '#775ACE' : '#fff'} />
      ) : (
        <Text
          style={
            variant === 'secondary'
              ? styles.textSecondary
              : variant === 'default'
              ? styles.textDefault
              : styles.textPrimary
          }>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0.5,
  },
  disabled: {opacity: 0.8},
  textPrimary: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
  },
  textSecondary: {
    color: 'rgba(41, 55, 82, 1)',
  },
  textDefault: {
    color: 'rgba(0, 151, 254, 1)',
  },
});

export default AppButton;
