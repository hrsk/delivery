import { instance } from '@/api/instance';
import { CalculateDeliveryDto } from '@/api/types';

export const getDeliveryPoints = async () => {
  return await instance.get('delivery/points');
};
export const getPackagesTypes = async () => {
  return await instance.get('delivery/package/types');
};
export const calculateDelivery = async (data: CalculateDeliveryDto) => {
  return await instance.post('delivery/calc', data);
};
