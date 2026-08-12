export const STEPS = {
  sendingMethods: 'Step 1',
  receiver: 'Step 2',
  sender: 'Step 3',
  receiverAddress: 'Step 4',
  senderAddress: 'Step 5',
  payment: 'Step 6',
  verificationAndConfirm: 'Step 7',
} as const;

export type StepRoute = (typeof STEPS)[keyof typeof STEPS];
