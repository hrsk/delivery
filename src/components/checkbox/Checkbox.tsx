import React from 'react';
import { Pressable, StyleProp, Text, TextStyle } from 'react-native';
import { styles } from './Checkbox.styles';

type CheckboxProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};

export const Checkbox = ({
  value,
  onChange,
  label,
  labelStyle,
}: CheckboxProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onChange(!value)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
    >
      <Text style={[styles.box, value && styles.checked]}>
        {value ? '✓' : ''}
      </Text>

      {label && <Text style={[labelStyle, styles.label]}>{label}</Text>}
    </Pressable>
  );
};
