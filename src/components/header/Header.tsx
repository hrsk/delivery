import { styles } from '@/components/header/Header.styles';
import { ReactNode } from 'react';
import { StyleProp, Text, View, ViewProps } from 'react-native';

type Props = {
  title?: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
  style?: StyleProp<ViewProps>;
};

export const Header = ({ title, leftAction, rightAction, style }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.leftSide}>{leftAction}</View>

      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.rightSide}>{rightAction}</View>
    </View>
  );
};
