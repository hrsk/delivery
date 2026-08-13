import { CreateDeliveryOrderPersonDto } from '@/api/types';
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
import { styles } from './Receiver.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SendingStackParamList } from '@/navigation/SendingStack';

type Props = NativeStackScreenProps<SendingStackParamList, 'Receiver'>;

interface Field {
  name: keyof CreateDeliveryOrderPersonDto;
  placeholder: string;
  label: string;
}

const fields: Field[] = [
  { name: 'lastname', placeholder: 'Иванов', label: 'Фамилия' },
  { name: 'firstname', placeholder: 'Иван', label: 'Имя' },
  { name: 'middlename', placeholder: 'Иванович', label: 'Отчество' },
  { name: 'phone', placeholder: '+7', label: 'Телефон' },
];

export const Receiver = ({ route }: Props) => {
  const navigation = useNavigation();
  const { steps, forwardStep, backStep } = useSteps();
  const { updateReceiver } = useOrderForm();

  const currentStep = steps.length;
  const { control, handleSubmit } = useForm<CreateDeliveryOrderPersonDto>({
    defaultValues: {
      firstname: 'Иван',
      lastname: 'Иванов',
      middlename: 'Иванович',
      phone: '+1241234132',
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title=" Получатель"
        leftAction={
          <Pressable
            onPress={() => {
              backStep('Step 2');
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

      <View style={styles.receiverForm}>
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
                    ...typography.input,
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
            updateReceiver(data);
            navigation.navigate('SendingStack', {
              screen: 'Sender',
            });
            forwardStep('Step 3');
          })}
          label="Продолжить"
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};
