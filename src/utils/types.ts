import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithoutRef } from 'react';

export type PropsWithAs<P, T extends ElementType> = P & { as?: T };
export type Merge<T, U> = Omit<T, keyof U> & U;

export type PolymorphicPropsWithoutRef<P, T extends ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements ? PropsWithoutRef<JSX.IntrinsicElements[T]> : ComponentPropsWithoutRef<T>,
  PropsWithAs<P, T>
>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
