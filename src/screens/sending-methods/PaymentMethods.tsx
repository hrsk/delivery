import {
  CreateDeliveryOrderPersonDto,
  CreateDeliveryOrderReceiverAddressDto,
} from '@/api/types';
import { Button, Header, Input } from '@/components';
import { STEPS } from '@/constants/steps';
import { StepsProgress } from '@/screens/sending-methods/StepsProgress';
import { useOrderForm } from '@/store/useOrderForm';
import { useSteps } from '@/store/useSteps';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ReceiverAddress.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SendingStackParamList } from '@/navigation/SendingStack';
import { longPressHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler';

// type FormValues = CreateDeliveryOrderPersonDto;

// type Props = {
//   control: Control<FormValues>;
// };

type Props = NativeStackScreenProps<SendingStackParamList, 'PaymentMethods'>;

interface Field {
  name: keyof CreateDeliveryOrderReceiverAddressDto;
  placeholder?: string;
  label: string;
}

const fields: Field[] = [
  { name: 'street', label: 'Улица' },
  { name: 'house', label: 'Дом' },
  { name: 'apartment', label: 'Квартира' },
  { name: 'comment', label: 'Заметка для курьера' },
];

export const PaymentMethods = ({ route }: Props) => {
  const navigation = useNavigation();

  const { steps, forwardStep, backStep } = useSteps();
  const { updateReceiverAddress } = useOrderForm();

  const currentStep = steps.length;
  const { control, handleSubmit } =
    useForm<CreateDeliveryOrderReceiverAddressDto>({
      defaultValues: {
        street: '',
        house: '',
        apartment: '',
        comment: '',
      },
    });

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

      <View style={styles.receiverAddressForm}>
        <Button
          onPress={handleSubmit(data => {
            updateReceiverAddress(data);
            navigation.navigate('SendingStack', { screen: 'VerifyAndConfirm' });
            forwardStep('Step 7');
          })}
          label="Продолжить"
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};
