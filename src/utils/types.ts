import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

export type AsProp<T extends ElementType> = {
  as?: T;
};

export type PolymorphicComponentProps<T extends ElementType, Props = {}> = AsProp<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof Props>;
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
