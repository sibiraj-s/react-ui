import { ComponentProps } from 'react';
import Text from '../Text';

type TextProps = ComponentProps<typeof Text>;
type LabelProps = TextProps & Omit<ComponentProps<'label'>, keyof TextProps>;

export const Label = (props: LabelProps) => {
  return <Text as='label' {...props} />;
};

export default Label;
