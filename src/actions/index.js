// 🌸reduxにおけるアクションとはJSのオブジェクトでアプリケーション内で何が起こったのか示すデータのこと🌸
// typeキーとバリュー(一意的)をもつ


// アクションクリエーター
// 他で利用するものを定義しexportする
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = () => ({
  type: INCREMENT
})
export const decrement = () => ({
  type: DECREMENT
})
