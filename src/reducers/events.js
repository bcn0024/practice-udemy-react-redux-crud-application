import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// レデューサー(アプリケーション内の状態の変更を担う)

// レデューサの第一引数は 変数 = {初期値}、第二引数はdispatch{}から送られてくる情報がaction.〇〇で取り出せる。
export default (events = {}, action) => {
  switch (action.type){
    case READ_EVENTS:
      // console.log(action.response.data)
      // [
      // {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      // {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      // ]
      // action.response.dataで取得した(上配列)を(下オブジェクト)のデータ構造に変えたい(lodashを使う)
      // 1:{"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."}
      // 2:{"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      // console.log(_.mapKeys(action.response.data, 'id'))
      // 各idをキーとするオブジェクトを再生成
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}