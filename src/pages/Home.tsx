import React from 'react'
import { IUserProps } from '../models/User'
import { IApplicationState, IDispatch } from '../models/Interfaces'
import { connect } from 'dva'
interface IProps {
  user: IUserProps;
  dispatch: IDispatch;
}

const Home: React.SFC<IProps> = ({dispatch, user}) => {
  const changeName = () => {
    dispatch({
      type: 'user/updateStatus',
      payload: {
        name: 'sssssuper1'
      }
    })
  }
  return <div>
    {user.name}
    <button onClick={changeName}>change name</button>
  </div>
}

export default connect(({user}: IApplicationState) => ({user}))(Home)