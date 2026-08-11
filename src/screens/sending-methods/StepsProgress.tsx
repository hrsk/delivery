import { colors } from '@/theme/colors';
import { palette } from '@/theme/palette';
import { typography } from '@/theme/typography';
import { Text, View } from 'react-native';

export const StepsProgress = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <View
      style={{
        gap: 4,
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{ ...typography.caption, color: colors.foreground }}
      >{`Шаг ${currentStep} из ${totalSteps}`}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: colors.muted,
          borderRadius: 16,
        }}
      >
        {Array.from({ length: totalSteps }).map((_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;

          return (
            <View
              key={step}
              style={[
                { backgroundColor: colors.muted, height: 4 },
                isActive && {
                  backgroundColor: palette.green500,
                  width: 46,
                  height: 4,
                  borderRadius: 16,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};
