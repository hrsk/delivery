import { CreateDeliveryOrderReceiverAddressDto } from '@/api/types';
import { Button, Checkbox, Header, Input } from '@/components';
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
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Popover, {
  PopoverMode,
  PopoverPlacement,
} from 'react-native-popover-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ReceiverAddress.styles';

type Props = NativeStackScreenProps<SendingStackParamList, 'ReceiverAddress'>;

interface FormData extends CreateDeliveryOrderReceiverAddressDto {
  atDoor: boolean;
}
interface Field {
  name: keyof FormData;
  placeholder?: string;
  label: string;
}

const fields: Field[] = [
  { name: 'street', label: 'Улица' },
  { name: 'house', label: 'Дом' },
  { name: 'apartment', label: 'Квартира' },
  { name: 'comment', label: 'Заметка для курьера' },
  { name: 'atDoor', label: 'Оставить посылку у двери' },
];

export const ReceiverAddress = ({}: Props) => {
  const navigation = useNavigation();

  const { steps, backStep, forwardStep } = useSteps();
  const { updateReceiverAddress } = useOrderForm();

  const [showPopover, setShowPopover] = useState(false);

  const currentStep = steps.length;
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      street: 'Евдокима Огнева',
      house: '19',
      apartment: '40',
      comment: '',
      atDoor: false,
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
              render={({ field: { onChange, onBlur, value, name } }) =>
                name !== 'atDoor' ? (
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
                ) : (
                  <View style={styles.atDoor}>
                    <Checkbox
                      value={value === false ? false : true}
                      onChange={() => onChange(!value)}
                      label={item.label}
                    />
                    <Popover
                      placement={PopoverPlacement.TOP}
                      isVisible={showPopover}
                      mode={PopoverMode.RN_MODAL}
                      popoverStyle={styles.popover}
                      arrowSize={{ width: 24, height: 6 }}
                      backgroundStyle={styles.popoverBackground}
                      from={
                        <TouchableOpacity onPress={() => setShowPopover(true)}>
                          <MaterialDesignIcons
                            name="help-circle-outline"
                            size={20}
                            color={colors.input}
                          />
                        </TouchableOpacity>
                      }
                    >
                      <View style={styles.popoverContent}>
                        <Text style={styles.popoverTitle}>
                          Бесконтактная доставка
                        </Text>
                        <TouchableOpacity onPress={() => setShowPopover(false)}>
                          <MaterialDesignIcons
                            name="close"
                            color={colors.input}
                            size={16}
                          />
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Text style={styles.popoverDescription}>
                          Курьер привозит заказ, оставляет его у двери и уходит,
                          а вам приходит уведомление на телефон о том, что заказ
                          доставлен
                        </Text>
                      </View>
                    </Popover>
                  </View>
                )
              }
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
