import { FC, useRef } from 'react';
import { useDateSegment } from 'react-aria';
import * as Stately from 'react-stately';
import { sva } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

interface DateSegmentProps {
  segment: Stately.DateSegment;
  state: Stately.DateFieldState;
}

export const dateStyle = sva({
  slots: ['root', 'label', 'segment'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'start',
    },
    label: {
      mb: '0.5',
    },
    segment: {
      display: 'flex',
      border: '1px solid token(colors.neutral.bgHover)',
      borderRadius: 'md',
      p: '1',
      pr: '8',
      transition: 'colors',
      _hover: {
        borderColor: 'primary',
      },
    },
  },
});

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
