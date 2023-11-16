import { FC, useRef } from 'react';
import { useDateField, AriaDateFieldProps, DateValue } from '@react-aria/datepicker';
import { useLocale } from '@react-aria/i18n';
import { useDateFieldState } from '@react-stately/datepicker';
import { createCalendar } from '@internationalized/date';
import { styled } from 'styled-system/jsx';
import { dateFieldRecipe } from 'styled-system/recipes';

import DateSegment from '../_shared/DateSegment';
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

  const dateFieldClasses = dateFieldRecipe();

  return (
    <styled.div className={dateFieldClasses.root}>
      <Label {...labelProps} size='sm' className={dateFieldClasses.label}>
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

export default DateField;
