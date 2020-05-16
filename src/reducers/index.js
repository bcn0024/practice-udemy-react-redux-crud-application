// reducerの結合ファイル

import { combineReducers } from 'redux'
// 結合する関数をインポート
import count from './count'

export default combineReducers ({ count })
// export default combineReducers ({ foo, bar, baz })
// 複数をcombineすることもできる