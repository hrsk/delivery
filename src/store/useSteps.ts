import { create } from 'zustand';

type StepsState = {
  steps: string[];
  forwardStep: (
    step:
      | 'Step 1'
      | 'Step 2'
      | 'Step 3'
      | 'Step 4'
      | 'Step 5'
      | 'Step 6'
      | 'Step 7',
  ) => void;
  reset: () => void;
  backStep: (
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
  forwardStep: step => {
    set(state => ({
      steps: [...state.steps, step],
    }));
  },
  backStep: step => {
    set(state => ({
      steps: state.steps.filter(s => s !== step),
    }));
  },
  reset: () => set({ steps: [] }),
}));
