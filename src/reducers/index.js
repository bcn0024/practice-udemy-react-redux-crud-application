// reducerの結合ファイル

import { combineReducers } from 'redux'
// 結合する関数をインポート
import events from './events'

export default combineReducers ({ events })
// export default combineReducers ({ foo, bar, baz })
// 複数をcombineすることもできる