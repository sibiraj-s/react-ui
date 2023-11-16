import { FC, useRef } from 'react';
import { useLocale } from '@react-aria/i18n';
import { AriaTimeFieldProps, TimeValue, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState, TimeFieldStateOptions } from '@react-stately/datepicker';
import { styled } from 'styled-system/jsx';
import { dateFieldRecipe } from 'styled-system/recipes';

import DateSegment from '../_shared/DateSegment';
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

  const dateFieldClasses = dateFieldRecipe();

  return (
    <styled.div className={dateFieldClasses.root}>
      <Label size='sm' {...labelProps} className={dateFieldClasses.label}>
        {props.label}
      </Label>
      <styled.div {...fieldProps} ref={ref} className={dateFieldClasses.container}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </styled.div>
    </styled.div>
  );
};

export default TimeField;
