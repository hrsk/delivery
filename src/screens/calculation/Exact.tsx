import { CalculateDeliveryPackageDto } from '@/api/types';
import { Input } from '@/components';
import { styles } from '@/screens/calculation/Exact.styles';
import { Control, Controller } from 'react-hook-form';
import { FlatList, View } from 'react-native';

type FormValues = CalculateDeliveryPackageDto;

type Props = {
  control: Control<FormValues>;
};

type Field = {
  name: 'length' | 'width' | 'height' | 'weight';
  placeholder: string;
  label: string;
};

const fields: Field[] = [
  { name: 'length', placeholder: 'см', label: 'Длина' },
  { name: 'width', placeholder: 'см', label: 'Ширина' },
  { name: 'height', placeholder: 'см', label: 'Высота' },
  { name: 'weight', placeholder: 'кг', label: 'Вес' },
];

export const Exact = ({ control }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fields}
        renderItem={({ item }) => (
          <Controller
            control={control}
            name={item.name}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value ? String(value) : ''}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={item.placeholder}
                label={item.label}
              />
            )}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
