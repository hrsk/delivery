import { create } from 'zustand';

type StepsState = {
  steps: string[];
  setStep: (
    step:
      | 'Step 1'
      | 'Step 2'
      | 'Step 3'
      | 'Step 4'
      | 'Step 5'
      | 'Step 6'
      | 'Step 7',
  ) => void;
};

const initialState = {
  steps: [],
};

export const useSteps = create<StepsState>(set => ({
  ...initialState,
  setStep: step => {
    set(state => ({
      steps: [...state.steps, step],
    }));
  },
}));
