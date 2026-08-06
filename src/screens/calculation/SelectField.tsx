import { Nunito } from '@/constants/fonts';
import {
  lineHeightToPx,
  styles,
} from '@/screens/calculation/SelectField.styles';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Pressable, Text, View } from 'react-native';

type Props = {
  label: string;
  value: string;
  onPress(): void;
};

export function SelectField({ label, value, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        onPress={onPress}
        style={styles.pressable}
        onLayout={e => console.log(e.nativeEvent.layout)}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: Nunito.MEDIUM,
            lineHeight: lineHeightToPx(16, 150),
          }}
        >
          {value}
        </Text>
        <MaterialDesignIcons name="chevron-down" size={24} color={'#B7B7B7'} />
      </Pressable>
    </View>
  );
}
