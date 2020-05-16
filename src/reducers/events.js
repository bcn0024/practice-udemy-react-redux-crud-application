import { READ_EVENTS } from '../actions'

// レデューサーはアプリケーション内の状態の変更を担う

export default (state = {}, action) => {
  switch (action.type){
    case READ_EVENTS:
      return state
    default:
      return state
  }
}