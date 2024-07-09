export type Prettify<T> = {
  // [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K]; // this line will add nested objects support
  [K in keyof T]: T[K];
} & {};
