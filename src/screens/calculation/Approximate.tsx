import { DeliveryPackage } from '@/api/types';
import { getPackageImage } from '@/constants/packages';
import { styles } from '@/screens/calculation/Approximate.styles';
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useCallback, useRef } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
  packageTypes: DeliveryPackage[];
  setPackageItem: (item: DeliveryPackage) => void;
};

export const Approximate = ({ packageTypes, setPackageItem }: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback(
    (item: DeliveryPackage) => {
      console.log(item);

      bottomSheetModalRef.current?.close();
      setPackageItem(item);
    },
    [setPackageItem],
  );

  return (
    <View style={{ flex: 1, paddingBottom: 12 }}>
      <Text style={styles.tabHeader}>Размер посылки</Text>
      <BottomSheetFlatList
        style={{ paddingHorizontal: 16, flex: 1 }}
        data={packageTypes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
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
              <MaterialDesignIcons
                style={styles.checkbox}
                name="check-circle"
                size={24}
                color={'#0B0B0B'}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
};
