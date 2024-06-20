import 'react';

type CustomCSSProperties = {
  [key in `--${string}`]: string;
};

declare module 'react' {
  export interface CSSProperties extends CustomCSSProperties {}
}
