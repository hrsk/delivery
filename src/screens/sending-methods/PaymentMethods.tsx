import { Payer } from '@/api/types';
import { Button, Footer, Header, Checkbox } from '@/components';
import { STEPS } from '@/constants/steps';
import { SendingStackParamList } from '@/navigation/SendingStack';
import { StepsProgress } from '@/screens/sending-methods/StepsProgress';
import { useOrderForm } from '@/store/useOrderForm';
import { useSteps } from '@/store/useSteps';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PaymentMethods.styles';
import { useCalculationStore } from '@/store/useCalculation';

type Props = NativeStackScreenProps<SendingStackParamList, 'PaymentMethods'>;

export const PaymentMethods = ({}: Props) => {
  const navigation = useNavigation();

  const { steps, forwardStep, backStep } = useSteps();
  const { setPayer } = useOrderForm();
  const { price } = useCalculationStore();

  type FormData = {
    payer: Payer | null;
  };

  const currentStep = steps.length;
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      payer: null,
    },
  });

  const onSubmit = ({ payer }: FormData) => {
    setPayer(payer);

    navigation.navigate('SendingStack', {
      screen: 'VerifyAndConfirm',
    });

    forwardStep('Step 7');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Оплата доставки"
        leftAction={
          <Pressable
            onPress={() => {
              backStep('Step 6');
              navigation.goBack();
            }}
          >
            <MaterialDesignIcons
              name="chevron-left"
              size={24}
              color={colors.foreground}
            />
          </Pressable>
        }
      />
      <StepsProgress
        currentStep={currentStep}
        totalSteps={Object.keys(STEPS).length}
      />
      <View style={{ paddingHorizontal: 16, gap: 12 }}>
        <Text style={{ ...typography.bodyMd }}>Кто оплачивает доставку</Text>

        <Controller
          control={control}
          name={'payer'}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value={value === Payer.receiver}
              onChange={() => onChange(Payer.receiver)}
              label="Получатель"
            />
          )}
        />

        <Controller
          control={control}
          name={'payer'}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value={value === Payer.sender}
              onChange={() => onChange(Payer.sender)}
              label="Отправитель"
            />
          )}
        />
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        label="Продолжить"
        style={styles.submitButton}
        labelStyle={styles.buttonText}
      />
      <Footer description="Кто оплачивает доставку?" price={price} />
    </SafeAreaView>
  );
};
