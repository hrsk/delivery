export const PackageImages = {
  envelope: require('@/assets/images/packages/envelope.png'),
  'box-xs': require('@/assets/images/packages/box-xs.png'),
  'box-s': require('@/assets/images/packages/box-s.png'),
  'box-m': require('@/assets/images/packages/box-m.png'),
  'box-l': require('@/assets/images/packages/box-l.png'),
  'box-xl': require('@/assets/images/packages/box-xl.png'),
  default: require('@/assets/images/packages/default-box.png'),
} as const;

export const getPackageImage = (key: string) => {
  return (
    PackageImages[key as keyof typeof PackageImages] ?? PackageImages.default
  );
};
