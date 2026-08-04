import { Point } from '@/api/types';
import { styles } from '@/screens/country-picker/DeliveryPoint.styles';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';

type Props = {
  point: Point;
};

export const DeliveryPoint = ({ point }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{point.name}</Text>
      <MaterialDesignIcons color={'#B7B7B7'} name="chevron-right" size={24} />
    </View>
  );
};
