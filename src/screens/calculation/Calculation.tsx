import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

import { getDeliveryPoints, getPackagesTypes } from '@/api/api';
import { Button, Header } from '@/components';
import { Nunito } from '@/constants/fonts';
import { getPackageImage } from '@/constants/packages';
import { styles } from '@/screens/calculation/Calculation.styles';
import { CitySuggestions } from '@/screens/calculation/CitySuggestions';
import { SelectField } from '@/screens/calculation/SelectField';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { useCalculationStore } from '@/store/useCalculation';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type PackageType = {
  id: 'envelope' | 'box-xs' | 'box-s' | 'box-m' | 'box-l' | 'box-xl';
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
};
export const Calculation = () => {
  const { from, to, pickFrom, pickTo, setTab, tab } = useCalculationStore();

  const navigation = useNavigation();
  // const bottomSheetRef = useRef<BottomSheet>(null);

  const [citySuggestions, setCitySuggestions] = useState([]);
  const [packageTypes, setPackagesTypes] = useState<PackageType[]>([]);
  const [packageItem, setPackageItem] = useState<PackageType>();

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

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(tab === 'approximate' ? 0 : 160, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  }, [tab, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

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
          handleIndicatorStyle={{ backgroundColor: '#FFF' }}
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
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              marginHorizontal: 24,
              borderRadius: 999,
              justifyContent: 'space-between',
              padding: 4,
            }}
          >
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  left: 4,
                  top: 4,
                  width: 160,
                  height: 42,
                  borderRadius: 999,
                  backgroundColor: '#FBFBFB',
                  boxShadow:
                    '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                },
                animatedStyle,
              ]}
            />
            <Button
              style={
                tab === 'approximate'
                  ? {
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 9999,
                      backgroundColor: '#FBFBFB',
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      width: 160,
                      height: 42,
                    }
                  : {
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      width: 160,
                      height: 42,
                    }
              }
              labelStyle={{
                fontSize: 18,
                fontFamily: Nunito.BOLD,
                lineHeight: lineHeightToPx(18, 144),
                color: '#0B0B0B',
              }}
              onPress={() => setTab('approximate')}
              label="Примерные"
            />

            <Button
              style={
                tab === 'exact'
                  ? {
                      borderRadius: 9999,
                      backgroundColor: '#FBFBFB',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      width: 160,
                      height: 42,
                    }
                  : {
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      width: 160,
                      height: 42,
                    }
              }
              labelStyle={{
                fontSize: 18,
                fontFamily: Nunito.BOLD,
                lineHeight: lineHeightToPx(18, 144),
                color: '#0B0B0B',
              }}
              onPress={() => setTab('exact')}
              label="Точные"
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              lineHeight: lineHeightToPx(24, 133),
              fontFamily: Nunito.BOLD,
              paddingHorizontal: 24,
            }}
          >
            Размер посылки
          </Text>
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
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 16,
                  }}
                  onPress={() => handleSheetChanges(item)}
                >
                  <Image
                    source={getPackageImage(item.id)}
                    width={48}
                    height={48}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: Nunito.BOLD,
                        fontSize: 24,
                        lineHeight: lineHeightToPx(24, 133),
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Nunito.MEDIUM,
                        fontSize: 14,
                        lineHeight: lineHeightToPx(14, 157),
                      }}
                    >
                      {`${item.length} x ${item.width} x ${item.height}`}{' '}
                    </Text>
                  </View>
                </Pressable>
              );
            }}
          />
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};
