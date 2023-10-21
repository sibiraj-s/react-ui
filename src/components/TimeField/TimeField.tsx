import { FC, useRef } from 'react';
import { AriaTimeFieldProps, TimeValue, useLocale, useTimeField } from 'react-aria';
import { useTimeFieldState, TimeFieldStateOptions } from 'react-stately';
import { styled } from 'styled-system/jsx';

import DateSegment, { dateStyle } from '../_shared/DateSegment';
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

  const styles = dateStyle();

  return (
    <styled.div className={styles.root}>
      <Label size='sm' {...labelProps} className={styles.label}>
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

export default TimeField;
