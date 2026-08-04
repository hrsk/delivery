import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

import { getDeliveryPoints, getPackagesTypes } from '@/api/api';
import { Header } from '@/components';
import { styles } from '@/screens/calculation/Calculation.styles';
import { CitySuggestions } from '@/screens/calculation/CitySuggestions';
import { SelectField } from '@/screens/calculation/SelectField';
import { useCalculationStore } from '@/store/useCalculation';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type PackageType = {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
};
export const Calculation = () => {
  const { from, to, pickFrom, pickTo } = useCalculationStore();

  const navigation = useNavigation();
  // const bottomSheetRef = useRef<BottomSheet>(null);

  const [citySuggestions, setCitySuggestions] = useState([]);
  const [packageTypes, setPackagesTypes] = useState<PackageType[]>([]);
  const [packageItem, setPackageItem] = useState<PackageType>();
  console.log(packageTypes);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((item: PackageType) => {
    bottomSheetModalRef.current?.close();

    setPackageItem(item);
  }, []);

  useEffect(() => {
    getDeliveryPoints().then(res => setCitySuggestions(res.data.points));
    getPackagesTypes().then(res => setPackagesTypes(res.data.packages));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Рассчитать доставку" />
        <View style={{ gap: 4 }}>
          <SelectField
            label="Откуда"
            value={from?.name ?? 'Выберите страну'}
            onPress={() => {
              pickFrom();
              navigation.navigate('CalculationStack', {
                screen: 'CountryPicker',
              });
            }}
          />
          <CitySuggestions mode={'from'} points={citySuggestions} />
        </View>

        <View style={{ gap: 4 }}>
          <SelectField
            label="Куда"
            value={to?.name ?? 'Выберите страну'}
            onPress={() => {
              pickTo();
              navigation.navigate('CalculationStack', {
                screen: 'CountryPicker',
              });
            }}
          />
          <CitySuggestions mode={'to'} points={citySuggestions} />
        </View>

        <SelectField
          label="Размер посылки"
          value={packageItem?.name ?? 'Не выбран'}
          onPress={handlePresentModalPress}
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['45%']}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              opacity={0.5}
            />
          )}
        >
          <BottomSheetFlatList
            style={{ paddingHorizontal: 16, flex: 1 }}
            data={packageTypes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={{
                    marginTop: 8,
                    borderRadius: 16,
                    paddingVertical: 16,
                    paddingLeft: 16,
                    paddingRight: 56,
                    height: 90,
                    borderColor: '#0B0B0B',
                    borderWidth: 1,
                  }}
                  onPress={() => handleSheetChanges(item)}
                >
                  <Text>{item.name}</Text>
                  <Text>
                    {`${item.length} x ${item.width} x ${item.height}`}{' '}
                  </Text>
                </Pressable>
              );
            }}
          />
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};
