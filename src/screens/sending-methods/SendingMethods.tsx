import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import banner from '@/assets/images/banners/Banner.png';
import { Header } from '@/components';
import { STEPS } from '@/constants/steps';
import { CalculationStackParamList } from '@/navigation/CalculationStack';
import { DeliveryMethod } from '@/screens/sending-methods/DeliveryMethod';
import { StepsProgress } from '@/screens/sending-methods/StepsProgress';
import { useSteps } from '@/store/useSteps';
import { colors } from '@/theme/colors';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './SendingMethods.styles';

type Props = NativeStackScreenProps<CalculationStackParamList, 'Sending'>;

export const SendingMethods = ({ route }: Props) => {
  const { sendingMethods } = route.params;

  const { steps, setStep } = useSteps();

  const navigation = useNavigation();

  const currentStep = steps.indexOf(steps[0]) + 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="Способ отправки"
        leftAction={
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialDesignIcons
              name="chevron-left"
              size={24}
              color={colors.foreground}
            />
          </Pressable>
        }
      />

      <StepsProgress currentStep={currentStep} totalSteps={STEPS.length} />

      <View style={styles.container}>
        <FlatList
          data={sendingMethods}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('SendingStack', {
                  screen: 'Recipient',
                });
                setStep('Step 2');
              }}
            >
              <DeliveryMethod delivery={item} />
            </Pressable>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listItem}
        />
        <Image source={banner} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};
