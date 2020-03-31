import { Model } from 'dva'
import { ReduxAction } from './Interfaces';

export interface IUserProps {
  id?: number;
  name?: string;
}

interface IUpdate extends ReduxAction {
  payload?: IUserProps
}

const model: Model = {
  namespace: 'user',
  state: {
    id: '',
    name: 'zry'
  },
  effects: {},
  reducers: {
    updateStatus(state: IUserProps, { payload }: IUpdate): IUserProps {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default model