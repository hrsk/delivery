import { CreateDeliveryOrderReceiverAddressDto } from '@/api/types';
import { Button, Header, Input } from '@/components';
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
import { FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ReceiverAddress.styles';

type Props = NativeStackScreenProps<SendingStackParamList, 'ReceiverAddress'>;

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

export const ReceiverAddress = ({ route }: Props) => {
  const navigation = useNavigation();

  const { steps, backStep, forwardStep } = useSteps();
  const { updateReceiverAddress } = useOrderForm();

  const currentStep = steps.length;
  const { control, handleSubmit } =
    useForm<CreateDeliveryOrderReceiverAddressDto>({
      defaultValues: {
        street: 'Евдокима Огнева',
        house: '19',
        apartment: '40',
        isNonContact: false,
      },
    });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Куда доставить"
        leftAction={
          <Pressable
            onPress={() => {
              navigation.goBack();
              backStep('Step 5');
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
        <FlatList
          data={fields}
          renderItem={({ item }) => (
            <Controller
              control={control}
              name={item.name}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value ? String(value) : ''}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder={item.placeholder}
                  label={item.label}
                  inputStyle={{
                    ...typography.placeholder,
                    placeholderTextColor: colors.input,
                  }}
                  labelStyle={{
                    ...typography.caption,
                    color: colors.foreground,
                  }}
                />
              )}
            />
          )}
          keyExtractor={item => item.name}
          contentContainerStyle={styles.fields}
        />
        <Button
          onPress={handleSubmit(data => {
            updateReceiverAddress(data);
            navigation.navigate('SendingStack', { screen: 'PaymentMethods' });
            forwardStep('Step 6');
          })}
          label="Продолжить"
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};
