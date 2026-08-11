import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  size?: number;
}

export function BYNIcon({ size = 20, style, ...props }: Props) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: 'nbrb',
          fontSize: size,
        },
        style,
      ]}
    >
      {'\uE901'}
    </Text>
  );
}
