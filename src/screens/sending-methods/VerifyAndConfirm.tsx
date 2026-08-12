import {
  CreateDeliveryOrderDto,
  CreateDeliveryOrderReceiverAddressDto,
  DeliveryOptionType,
  Payer,
} from '@/api/types';
import { Button, Header } from '@/components';
import { STEPS } from '@/constants/steps';
import { SendingStackParamList } from '@/navigation/SendingStack';
import { StepsProgress } from '@/screens/sending-methods/StepsProgress';
import { useOrderForm } from '@/store/useOrderForm';
import { useSteps } from '@/store/useSteps';
import { colors } from '@/theme/colors';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ReceiverAddress.styles';
import { createDeliveryOrder } from '@/api/api';

// type FormValues = CreateDeliveryOrderPersonDto;

// type Props = {
//   control: Control<FormValues>;
// };

type Props = NativeStackScreenProps<SendingStackParamList, 'VerifyAndConfirm'>;

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

export const VerifyAndConfirm = ({ route }: Props) => {
  const navigation = useNavigation();

  const { steps, backStep } = useSteps();

  const currentStep = steps.length;
  const { control, handleSubmit } = useForm();
  const { data } = useOrderForm();

  const onSubmit = () => {
    const dto: CreateDeliveryOrderDto = {
      packageId: data.packageId,
      optionType: data.optionType ?? DeliveryOptionType.default,
      senderPointId: data.senderPointId,
      senderAddress: {
        street: data.senderAddress.street,
        house: data.senderAddress.house,
        apartment: data.senderAddress.apartment,
        comment: data.senderAddress.comment,
      },
      sender: {
        firstname: data.sender.firstname,
        lastname: data.sender.lastname,
        middlename: data.sender.middlename,
        phone: data.sender.phone,
      },
      receiverPointId: data.receiverPointId,
      receiverAddress: {
        street: data.receiverAddress.street,
        house: data.receiverAddress.house,
        apartment: data.receiverAddress.apartment,
        comment: data.receiverAddress.comment,
        isNonContact: data.receiverAddress.isNonContact,
      },
      receiver: {
        firstname: data.receiver.firstname,
        lastname: data.receiver.lastname,
        middlename: data.receiver.middlename,
        phone: data.receiver.phone,
      },
      payer: data.payer ?? Payer.sender,
    };
    console.log(dto);

    createDeliveryOrder(dto).then(res => console.log(res));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Проверка данных"
        leftAction={
          <Pressable
            onPress={() => {
              navigation.goBack();
              backStep('Step 7');
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
          onPress={() => {
            onSubmit();
            navigation.navigate('SendingStack', { screen: 'Success' });
          }}
          label="Продолжить"
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};
