import { CalculateDeliveryPackageDto } from '@/api/types';
import { Input } from '@/components/input/Input';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';

type FormValues = CalculateDeliveryPackageDto;

type Props = {
  control: Control<FormValues>;
};
export const Exact = ({ control }: Props) => {
  return (
    <View style={{ flex: 1, paddingBottom: 12, gap: 16 }}>
      <Controller
        control={control}
        name="length"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={String(value)}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="см"
            label="Длина"
          />
        )}
      />
      <Controller
        control={control}
        name="width"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={String(value)}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="см"
            label="Ширина"
          />
        )}
      />
      <Controller
        control={control}
        name="height"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={String(value)}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="см"
            label="Высота"
          />
        )}
      />
      <Controller
        control={control}
        name="weight"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={String(value)}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="кг"
            label="Вес"
          />
        )}
      />
    </View>
  );
};
