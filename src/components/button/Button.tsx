import { styles } from '@/components/button/Button.styles';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

type MaterialDesignIconName = React.ComponentProps<
  typeof MaterialDesignIcons
>['name'];

type Icon = {
  component: typeof MaterialDesignIcons;
  name: MaterialDesignIconName;
  color: string;
  size: number;
};

interface IButton extends TouchableOpacityProps {
  label?: string;
  icon?: Icon;
  withIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean | null;
  variants?: 'primary' | 'delete' | 'outlined';
  error?: string | null;
  labelStyle?: StyleProp<TextStyle>;
}
export const Button = ({
  label,
  icon,
  size = 'medium',
  variants = 'primary',
  error = null,
  disabled,
  style,
  labelStyle,
  ...props
}: IButton) => {
  const Icon = icon?.component;

  return (
    <TouchableOpacity
      style={[
        styles.base,
        style,
        size === 'small' ? styles.small : null,
        variants === 'delete' ? styles.delete : null,
        variants === 'outlined' ? styles.outlined : null,
        error ? styles.disabled : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <Text style={labelStyle}>{label}</Text>}

      {Icon && <Icon name={icon.name} size={icon.size} color={icon.color} />}
    </TouchableOpacity>
  );
};
