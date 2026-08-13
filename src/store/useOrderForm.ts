import {
  CreateDeliveryOrderPersonDto,
  CreateDeliveryOrderReceiverAddressDto,
  CreateDeliveryOrderSenderAddressDto,
  DeliveryOptionType,
  Payer,
} from '@/api/types';
import { create } from 'zustand';

type FormData = {
  packageId: string;
  optionType: DeliveryOptionType | null;
  senderPointId: string;
  senderAddress: CreateDeliveryOrderSenderAddressDto;
  sender: CreateDeliveryOrderPersonDto;
  receiverPointId: string;
  receiverAddress: CreateDeliveryOrderReceiverAddressDto;
  receiver: CreateDeliveryOrderPersonDto;
  payer: Payer | null;
};

type FormState = {
  data: FormData;
  setPackageId: (id: string) => void;
  setPayer: (payer: Payer | null) => void;
  setSenderPointId: (id: string) => void;
  setReceiverPointId: (id: string) => void;
  updateOptionType: (data: Partial<FormData['optionType']>) => void;
  updateSender: (data: Partial<FormData['sender']>) => void;
  updateReceiver: (data: Partial<FormData['receiver']>) => void;
  updateReceiverAddress: (data: Partial<FormData['receiverAddress']>) => void;
  updateSenderAddress: (data: Partial<FormData['senderAddress']>) => void;
  reset: () => void;
};

const initialData: FormData = {
  optionType: null,
  packageId: '',
  senderPointId: '',
  receiverPointId: '',
  sender: {
    firstname: '',
    lastname: '',
    phone: '',
    middlename: '',
  },
  senderAddress: {
    apartment: '',
    house: '',
    street: '',
    comment: '',
  },
  receiver: {
    firstname: '',
    lastname: '',
    phone: '',
    middlename: '',
  },
  receiverAddress: {
    apartment: '',
    house: '',
    street: '',
    comment: '',
    isNonContact: false,
  },
  payer: null,
};

export const useOrderForm = create<FormState>(set => ({
  data: initialData,
  updateOptionType: option =>
    set(state => ({
      data: {
        ...state.data,
        optionType: option,
      },
    })),
  setPackageId: id =>
    set(state => ({
      data: {
        ...state.data,
        packageId: id,
      },
    })),
  setSenderPointId: id =>
    set(state => ({
      data: {
        ...state.data,
        senderPointId: id,
      },
    })),
  setReceiverPointId: id =>
    set(state => ({
      data: {
        ...state.data,
        receiverPointId: id,
      },
    })),
  updateSender: data =>
    set(state => ({
      data: {
        ...state.data,
        sender: {
          ...state.data.sender,
          ...data,
        },
      },
    })),

  updateReceiver: data =>
    set(state => ({
      data: {
        ...state.data,
        receiver: {
          ...state.data.receiver,
          ...data,
        },
      },
    })),

  updateSenderAddress: data =>
    set(state => ({
      data: {
        ...state.data,
        senderAddress: {
          ...state.data.senderAddress,
          ...data,
        },
      },
    })),
  updateReceiverAddress: data =>
    set(state => ({
      data: {
        ...state.data,
        receiverAddress: {
          ...state.data.receiverAddress,
          ...data,
        },
      },
    })),
  setPayer: payer =>
    set(state => ({
      data: {
        ...state.data,
        payer,
      },
    })),

  reset: () => set({ data: initialData }),
}));
