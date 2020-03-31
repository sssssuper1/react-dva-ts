import dva from 'dva'
import { FastClick } from 'fastclick'
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading-ts'

import './theme/index.css'
import * as serviceWorker from './serviceWorker'

import user from './models/User'

FastClick.attach(document.body)

const app = dva({
  history: createHistory(),
  onError: (err: Error) => {
    console.log(err.message)
  }
})

app.use(createLoading())

app.model(user)

app.start('#root')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()