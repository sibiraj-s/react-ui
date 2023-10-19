import { FC, useRef } from 'react';
import { useDateSegment } from 'react-aria';
import * as Stately from 'react-stately';
import { styled } from 'styled-system/jsx';

interface DateSegmentProps {
  segment: Stately.DateSegment;
  state: Stately.DateFieldState;
}

const DateSegment: FC<DateSegmentProps> = ({ segment, state }) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <styled.div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth: segment.maxValue !== undefined ? `${String(segment.maxValue).length}ch` : undefined,
      }}
      px='0.5'
      boxSizing='content-box'
      textAlign='right'
      fontVariantNumeric='tabular-nums'
      outline='none'
      rounded='sm'
      color={!segment.isEditable ? 'neutral.line' : 'neutral.text'}
      _focus={{ bg: 'primary', color: 'white' }}
      className='group'
    >
      {/* reserve space for the placeholder, to prevent layout shift while editing. */}
      <styled.span
        aria-hidden='true'
        display='block'
        textAlign='center'
        color='neutral.line'
        _groupFocus={{
          color: 'white',
        }}
        style={{
          visibility: segment.isPlaceholder ? undefined : 'hidden',
          height: segment.isPlaceholder ? undefined : 0,
          pointerEvents: 'none',
        }}
      >
        {segment.placeholder}
      </styled.span>
      {segment.isPlaceholder ? '' : segment.text}
    </styled.div>
  );
};

export default DateSegment;
