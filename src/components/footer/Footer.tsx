import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { Text, View } from 'react-native';
import { styles } from './Footer.styles';

type Props = {
  price?: number | null;
  description: string;
};
export const Footer = ({ description, price }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.price}>
        <Text style={{ ...typography.bold }}>Итого:</Text>
        <Text style={{ ...typography.bold, color: colors.foreground }}>
          {price ? `${price} BYN` : 'от 250 BYN'}
        </Text>
      </View>
      <View style={styles.description}>
        <Text
          style={{ ...typography.caption, color: colors.secondaryForeground }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};
