import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {global} from '../styles/global';

const InputField = forwardRef((props, ref) => {
  const {
    control,
    label,
    placeholder,
    name,
    required,
    rules,
    type,
    passwordField,
    onSubmit,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={{required: required, ...rules}}
      mode="all"
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={styles.group}>
          {label ? (
            <Text style={styles.label}>
              {label} {required ? <Text style={styles.required}>*</Text> : null}
            </Text>
          ) : null}
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChange}
            style={[styles.input]}
            placeholder={placeholder}
            onSubmitEditing={onSubmit}
            onBlur={onBlur}
            placeholderTextColor="#rgba(41, 55, 82, 1)"
            keyboardType={type}
            secureTextEntry={passwordField}
            showSoftInputOnFocus={true}
          />
          {error ? <Text style={global.error}>{error.message}</Text> : null}
        </View>
      )}
    />
  );
});

const styles = StyleSheet.create({
  group: {
    gap: 8,
  },

  label: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '600',
  },

  input: {
    borderWidth: 1,
    borderColor: '#C6C6C6',
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 14,
    color: '#141414',
  },

  required: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
});

export default InputField;
