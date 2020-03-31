import { IUserProps } from './User'

export interface ReduxAction {
  type: string;
  [propsName: string]: any;
}

export interface IDispatch {
  <A extends ReduxAction>(action: A): A;
}

export interface IApplicationState {
  user: IUserProps;
  IDispatch: IDispatch;
}