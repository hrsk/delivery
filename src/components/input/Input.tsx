import React, { forwardRef } from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './Input.styles';

interface InputProps extends TextInputProps {
  label: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ style, label, labelStyle, placeholder, ...props }, ref) => {
    return (
      <View style={[styles.base, style]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>

        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#B7B7B7"
          {...props}
        />
      </View>
    );
  },
);

Input.displayName = 'Input';
