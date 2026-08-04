import { instance } from '@/api/instance';

export const getDeliveryPoints = async () => {
  return await instance('delivery/points');
};
export const getPackagesTypes = async () => {
  return await instance('delivery/package/types');
};
