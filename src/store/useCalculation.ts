import { DeliveryPointType } from '@/api/types';
import { create } from 'zustand';
type Tabs = 'approximate' | 'exact';
type PointsState = {
  from: DeliveryPointType | null;
  to: DeliveryPointType | null;

  mode: 'from' | 'to' | null;
  activePoint: string | null;

  pickFrom: () => void;
  pickTo: () => void;

  setMode(mode: 'from' | 'to'): void;
  setDeliveryPoint(point: DeliveryPointType): void;
  tab: Tabs;
  setTab(tab: Tabs): void;
};

export type Mode = 'from' | 'to' | null;
const initialState = {
  from: null,
  to: null,
  tab: 'approximate' as Tabs,
  activePoint: null,
  mode: null as Mode,
};

export const useCalculationStore = create<PointsState>(set => ({
  ...initialState,
  setMode: mode =>
    set({
      mode,
    }),
  pickFrom: () =>
    set({
      mode: 'from',
    }),

  pickTo: () =>
    set({
      mode: 'to',
    }),
  setDeliveryPoint: point =>
    set(state => ({
      from: state.mode === 'from' ? point : state.from,
      to: state.mode === 'to' ? point : state.to,
    })),
  setTab: () =>
    set(state => ({
      tab: state.tab === 'approximate' ? 'exact' : 'approximate',
    })),
}));
