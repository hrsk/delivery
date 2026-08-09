import { styles } from '@/screens/calculation/SelectField.styles';
import { ReactElement, ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
  label: string;
  value: string;
  onPress(): void;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  children?: ReactNode;
};

export function SelectField({
  leftIcon,
  rightIcon,
  label,
  value,
  onPress,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={onPress} style={styles.pressable}>
        {leftIcon}
        <Text style={styles.fieldText}>{value}</Text>
        {rightIcon}
      </Pressable>
      {children}
    </View>
  );
}
