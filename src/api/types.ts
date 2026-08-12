export type DeliveryPointType = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export type DeliveryPointsResponse = {
  points: DeliveryPointType[];
  success: boolean;
  reason: string;
};
export type DeliveryPackage = {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
};
export type DeliveryPackageTypesResponse = {
  packages: DeliveryPackage[];
  success: boolean;
  reason: string;
};

export type CalculateDeliveryPackageDto = {
  length: number;
  width: number;
  height: number;
  weight: number;
};
export type CalculateDeliveryPointDto = {
  latitude: number;
  longitude: number;
};
export type CalculateDeliveryDto = {
  package: CalculateDeliveryPackageDto;
  receiverPoint: CalculateDeliveryPointDto;
  senderPoint: CalculateDeliveryPointDto;
};

export type CalculateDeliveryResponse = {
  options: DeliveryOption[];
  success: boolean;
  reason: string;
};

export type DeliveryOption = {
  days: number;
  id: string;
  name: string;
  price: number;
  type: DeliveryOptionType;
};

export enum DeliveryOptionType {
  default = 'default',
  express = 'express',
}
export enum Payer {
  receiver = 'receiver',
  sender = 'sender',
}

export type CreateDeliveryOrderReceiverAddressDto = {
  apartment: string;
  house: string;
  street: string;
  comment: string;
  isNonContact: boolean;
};
export type CreateDeliveryOrderSenderAddressDto = {
  apartment: string;
  house: string;
  street: string;
  comment: string;
};

export type CreateDeliveryOrderPersonDto = {
  firstname: string;
  lastname: string;
  phone: string;
  middlename: string;
};

export type CreateDeliveryOrderDto = {
  packageId: string;
  optionType: DeliveryOptionType;
  senderPointId: string;
  senderAddress: CreateDeliveryOrderSenderAddressDto;
  sender: CreateDeliveryOrderPersonDto;
  receiverPointId: string;
  receiverAddress: CreateDeliveryOrderReceiverAddressDto;
  receiver: CreateDeliveryOrderPersonDto;
  payer: Payer;
};
