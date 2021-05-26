declare module '*.png'

type ReduxProps<
  T extends (...args: any) => any,
  U extends (...args: any) => any,
> = (T extends (...args: any) => infer R ? R : any) &
  (U extends (...args: any) => infer R ? R : any)
