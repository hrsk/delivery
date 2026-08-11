export const STEPS = [
  'Step 1',
  'Step 2',
  'Step 3',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7',
] as const;

export type StepRoute = (typeof STEPS)[number];
