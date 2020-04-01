import dva from 'dva'
import { createBrowserHistory } from 'history'
import createLoading from 'dva-loading-ts'

import './theme/index.css'
import * as serviceWorker from './serviceWorker'

import Routers from './router'
import user from './models/User'

const app = dva({
  history: createBrowserHistory(),
  onError: (err: Error) => {
    console.log(err.message)
  }
})

app.use(createLoading())

app.model(user)
app.router(Routers)

app.start('#root')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()