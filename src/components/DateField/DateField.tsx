import { FC, useRef } from 'react';
import { useLocale, useDateField, AriaDateFieldProps, DateValue } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { styled } from 'styled-system/jsx';

import DateSegment, { dateStyle } from '../_shared/DateSegment';
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

  const styles = dateStyle();

  return (
    <styled.div className={styles.root}>
      <Label {...labelProps} size='sm' className={styles.label}>
        {props.label}
      </Label>
      <styled.div {...fieldProps} ref={ref} className={styles.segment}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </styled.div>
    </styled.div>
  );
};

export default DateField;
