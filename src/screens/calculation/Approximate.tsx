import { DeliveryPackage } from '@/api/types';
import { getPackageImage } from '@/constants/packages';
import { styles } from '@/screens/calculation/Approximate.styles';
import { colors } from '@/theme/colors';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
  packageItem: DeliveryPackage | undefined;
  packageTypes: DeliveryPackage[];
  setPackageItem: (item: DeliveryPackage) => void;
  onClose: () => void;
};

export const Approximate = ({
  packageItem,
  packageTypes,
  setPackageItem,
  onClose,
}: Props) => {
  const handleSheetChanges = useCallback(
    (item: DeliveryPackage) => {
      onClose();
      setPackageItem(item);
    },
    [setPackageItem, onClose],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tabHeader}>Размер посылки</Text>
      <BottomSheetFlatList
        style={styles.bottomSheetFlatList}
        data={packageTypes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const selected = item.id === packageItem?.id;

          return (
            <Pressable
              style={styles.button}
              onPress={() => handleSheetChanges(item)}
            >
              <Image source={getPackageImage(item.id)} width={48} height={48} />
              <View style={styles.deliveryDescription}>
                <Text style={styles.deliveryType}>{item.name}</Text>
                <Text style={styles.deliverySize}>
                  {`${item.length} x ${item.width} x ${item.height}`}{' '}
                </Text>
              </View>
              {selected && (
                <MaterialDesignIcons
                  style={styles.checkbox}
                  name="check-circle"
                  size={24}
                  color={colors.foreground}
                />
              )}
            </Pressable>
          );
        }}
      />
    </View>
  );
};
