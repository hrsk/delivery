import { Point } from '@/api/types';
import { styles } from '@/screens/country-picker/DeliveryPoint.styles';
import { Text, View } from 'react-native';

type Props = {
  point: Point;
};

export const DeliveryPoint = ({ point }: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
      }}
    >
      <Text style={styles.text}>{point.name}</Text>
    </View>
  );
};
