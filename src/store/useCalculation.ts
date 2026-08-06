import { Point } from '@/api/types';
import { create } from 'zustand';
type Tabs = 'approximate' | 'exact';
type PointsState = {
  from: Point | null;
  to: Point | null;

  mode: 'from' | 'to' | null;
  activePoint: string | null;

  pickFrom: () => void;
  pickTo: () => void;

  setMode(mode: 'from' | 'to'): void;
  setCountry(country: Point): void;
  tab: Tabs;
  setTab(tab: Tabs): void;
};

export type Mode = 'from' | 'to' | null;
const initialState = {
  from: null,
  to: null,
  tab: 'approximate' as Tabs,
  activePoint: null,
  mode: 'from' as Mode,
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
  setCountry: country =>
    set(state => ({
      from: state.mode === 'from' ? country : state.from,
      to: state.mode === 'to' ? country : state.to,
    })),
  setTab: () =>
    set(state => ({
      tab: state.tab === 'approximate' ? 'exact' : 'approximate',
    })),
}));
