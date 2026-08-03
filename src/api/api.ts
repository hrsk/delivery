import { instance } from '@/api/instance';

export const getDeliveryPoints = async () => {
  return await instance('delivery/points');
};
