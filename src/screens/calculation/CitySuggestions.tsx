import { DeliveryPointType } from '@/api/types';
import { styles } from '@/screens/calculation/CitySuggestions.styles';
import { Mode, useCalculationStore } from '@/store/useCalculation';
import { Pressable, Text } from 'react-native';

type Props = {
  points: DeliveryPointType[];
  mode: Mode;
};

export const CitySuggestions = ({ points, mode }: Props) => {
  const { setDeliveryPoint, from, to } = useCalculationStore();

  const activePoint = mode === 'from' ? from : to;

  const getVisiblePoints = (() => {
    if (!activePoint) {
      return points?.slice(0, 3);
    }

    const currentIndex = points.findIndex(point => point.id === activePoint.id);

    return points.slice(Math.max(currentIndex - 1, 0), currentIndex + 3);
  })();

  return (
    <Text>
      {getVisiblePoints
        ?.filter(item => item.name !== activePoint?.name)
        .flatMap((item, index, array) => [
          <Pressable
            key={item.id}
            onPress={() => {
              setDeliveryPoint(item);
            }}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>,
          index < array.length - 1 ? (
            <Text key={`${item.id}-comma`}> </Text>
          ) : null,
        ])}
    </Text>
  );
};
