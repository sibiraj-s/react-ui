import { ComponentProps, FC } from 'react';
import { styled } from 'styled-system/jsx';
import { spinnerRecipe } from 'styled-system/recipes';

const StyledSpinner = styled('div', spinnerRecipe);

type SpinnerVariantProps = ComponentProps<typeof StyledSpinner>;
type SpinnerExtraProps = {
  strokeWidth?: number;
  percents?: number;
};
type SpinnerOwnProps = SpinnerVariantProps & SpinnerExtraProps;

type SpinnerProps = SpinnerOwnProps;

export const Spinner: FC<SpinnerProps> = (props) => {
  const { strokeWidth = 10, percents = 75 } = props;
  const [spinnerVariantProps] = spinnerRecipe.splitVariantProps(props);

  const size = 100;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = Math.ceil(2 * Math.PI * radius);

  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (percents - 100)));
  const spinnerClasses = spinnerRecipe(spinnerVariantProps);

  return (
    <StyledSpinner {...props} className={spinnerClasses.container}>
      <svg viewBox={`0 0 ${size} ${size}`} version='1.1' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <circle
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          className={spinnerClasses.circle}
        />
        <circle
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          transform={`rotate(-90 ${center} ${center})`}
          className={spinnerClasses.spinner}
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            begin='0s'
            dur='1s'
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </StyledSpinner>
  );
};

export default Spinner;
