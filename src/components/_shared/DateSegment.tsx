import { FC, useRef } from 'react';
import { useDateSegment } from '@react-aria/datepicker';
import * as Stately from '@react-stately/datepicker';
import { dateSegmentRecipe } from 'styled-system/recipes';
import { Box, styled } from 'styled-system/jsx';
import { cx } from 'styled-system/css';

interface DateSegmentProps {
  segment: Stately.DateSegment;
  state: Stately.DateFieldState;
}

const DateSegment: FC<DateSegmentProps> = ({ segment, state }) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  const dateSegmentClasses = dateSegmentRecipe({ isLiteral: segment.type === 'literal' });

  return (
    <Box
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth: segment.maxValue !== undefined ? `${String(segment.maxValue).length}ch` : undefined,
      }}
      className={cx('group', dateSegmentClasses.segment)}
    >
      {/* reserve space for the placeholder, to prevent layout shift while editing. */}
      <styled.span
        aria-hidden='true'
        className={dateSegmentClasses.input}
        style={{
          visibility: segment.isPlaceholder ? undefined : 'hidden',
          height: segment.isPlaceholder ? undefined : 0,
          pointerEvents: 'none',
        }}
      >
        {segment.placeholder}
      </styled.span>
      {segment.isPlaceholder ? '' : segment.text}
    </Box>
  );
};

export default DateSegment;
