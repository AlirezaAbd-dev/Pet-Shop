import { AxiosError } from 'axios';

export type apiError<TObj = unknown> = AxiosError<
  { status: string; message: string } & TObj
>;
