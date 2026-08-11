import { DeliveryOption } from '@/api/types';
import { colors } from '@/theme/colors';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';
import { styles } from './DeliveryMethod.styles';
import { plural } from '@/utils/plural';

export const DeliveryMethod = ({ delivery }: { delivery: DeliveryOption }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MaterialDesignIcons
          name={delivery.type === 'express' ? 'airplane' : 'bus'}
          size={24}
          color={colors.foreground}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.type}>{delivery.name}</Text>
        <View style={styles.description}>
          <Text style={styles.price}>{delivery.price} </Text>
          <Text style={styles.price}>BYN</Text>
        </View>
        <Text style={styles.days}>
          {`${delivery.days} рабочих ${plural(delivery.days)}`}
        </Text>
      </View>
      <MaterialDesignIcons
        name="chevron-right"
        size={24}
        color={colors.mutedForeground}
      />
    </View>
  );
};
