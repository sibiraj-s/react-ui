import { FC, useRef } from 'react';
import { AriaTimeFieldProps, TimeValue, useLocale, useTimeField } from 'react-aria';
import { useTimeFieldState, TimeFieldStateOptions } from 'react-stately';
import { styled } from 'styled-system/jsx';

import DateSegment from './DateSegment';
import Label from '../Label';

type TimeFieldProps = TimeFieldStateOptions & AriaTimeFieldProps<TimeValue>;

const TimeField: FC<TimeFieldProps> = (props) => {
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

  return (
    <styled.div display='flex' flexDir='column' alignItems='start'>
      <Label size='sm' {...labelProps}>
        {props.label}
      </Label>
      <styled.div
        {...fieldProps}
        ref={ref}
        display='flex'
        border='1px solid token(colors.$neutralBgHover)'
        borderRadius='md'
        p='1'
        pr='8'
        _hover={{
          borderColor: '$accentSolid',
        }}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </styled.div>
    </styled.div>
  );
};

export default TimeField;
