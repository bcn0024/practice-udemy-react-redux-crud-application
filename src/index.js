import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
// applyMiddlewareはミドルウェアを使う時に必要
import { Provider } from 'react-redux'
// ストアと全コンポから直接ストアに接続できる(バケツリレーをしなくてよくなる)用のProviderをインポート
import thunk from 'redux-thunk'
// アクションクリエーターがアクションではなく関数を返すことができるようにする(ミドルウェア)
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))
// 第二引数にミドルウェアを組み込む

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
