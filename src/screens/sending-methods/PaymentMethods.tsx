import { Payer } from '@/api/types';
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

type Props = NativeStackScreenProps<SendingStackParamList, 'PaymentMethods'>;
interface Field {
  name: Payer;
  placeholder?: string;
  label: string;
}

const fields: Field[] = [
  { name: Payer.receiver, label: 'Получатель' },
  { name: Payer.sender, label: 'Отправитель' },
];

export const PaymentMethods = ({ route }: Props) => {
  const navigation = useNavigation();

  const { steps, forwardStep, backStep } = useSteps();
  const { setPayer } = useOrderForm();

  const currentStep = steps.length;
  const { control, handleSubmit } = useForm<any>({
    defaultValues: {
      receiver: false,
      sender: false,
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
          onPress={handleSubmit(() => {
            setPayer(Payer.receiver);
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
