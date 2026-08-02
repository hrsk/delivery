import { styles } from '@/components/header/Header.styles';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  title: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
};

export const Header = ({ title, leftAction, rightAction }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>{leftAction}</View>

      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.side}>{rightAction}</View>
    </View>
  );
};
