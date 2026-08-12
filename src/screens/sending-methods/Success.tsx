import { Button, Header } from '@/components';
import { SendingStackParamList } from '@/navigation/SendingStack';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Success.styles';

import { useSteps } from '@/store/useSteps';
import { useCalculationStore } from '@/store/useCalculation';
import { getDeliveryStatus } from '@/api/api';
import { useState } from 'react';

type Props = NativeStackScreenProps<SendingStackParamList, 'Success'>;

export const Success = ({ route }: Props) => {
  const navigation = useNavigation();

  const { reset } = useSteps();
  const { resetDeliveryPoints } = useCalculationStore();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        rightAction={
          <Pressable
            onPress={() => {
              navigation.navigate('CalculationStack', {
                screen: 'Calculation',
              });
              reset();
              resetDeliveryPoints();
            }}
          >
            <MaterialDesignIcons
              name="close"
              size={24}
              color={colors.foreground}
            />
          </Pressable>
        }
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
          gap: 16,
        }}
      >
        <View style={styles.iconWrapper}>
          <MaterialDesignIcons
            name={'check'}
            size={24}
            color={colors.background}
          />
        </View>
        <View
          style={{ alignItems: 'center', justifyContent: 'center', gap: 4 }}
        >
          <Text style={{ ...typography.titleMd, color: colors.foreground }}>
            Заявка отправлена
          </Text>
          <Text style={{ ...typography.bodySm, textAlign: 'center' }}>
            Вы можете оплатить ваш заказ в разделе "Профиль"
          </Text>
        </View>
        <Button
          onPress={() => {}}
          label="Посмотреть статус"
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};
