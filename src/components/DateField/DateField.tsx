import { FC, useRef } from 'react';
import { useLocale, useDateField, AriaDateFieldProps, DateValue } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { styled } from 'styled-system/jsx';

import DateSegment from '../TimeField/DateSegment';
import Label from '../Label';

type DateFieldProps = AriaDateFieldProps<DateValue>;

const DateField: FC<DateFieldProps> = (props) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <styled.div display='flex' flexDir='column' alignItems='start'>
      <Label {...labelProps} size='sm'>
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
        transition='colors'
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

export default DateField;
