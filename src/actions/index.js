// 🌸reduxにおけるアクションとはJSのオブジェクトでアプリケーション内で何が起こったのか示すデータのこと🌸
// typeキーとバリュー(一意的)をもつオブジェクト

// アクションクリエーター
// 他で利用するものを定義しexportする

// 外部のAPIサーバにリクエストを投げる処理、HTTPクライアントをインポート
import axios from 'axios'

// src/index.jsにthunkをimportすることで
// アクションクリエーターがアクションではなく関数を返すことができるようになりその中でdispatchすることもできる

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  dispatch({ type: READ_EVENTS, response})
  // {response:[API取得データ]}を含めたアクションをdispatchで渡す
}
// axiosの戻り値はpromiseオブジェクトになるため async await で対応
