import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

// 🌸stateはクラスコンポーネントの内部でのみ状態を持つことができるもの(変更可能値)
// 🌸propsは親コンポーネントから渡されるもの(変更不可能値)

class App extends Component {

// Reduxを使う場合にコンポーネントの値の初期化は不要、Reducerが役割を担うため

// アクションクリエーターとレデューサーで変更するため不要

  render(){
    // 🌸setStateの度に呼ばれる＝その度に自動的にDOMの変更をしてくれるのがReactのいいところ
    console.log('per setState')

    const props = this.props
    return(
    <React.Fragment>
      <div>value : { props.value }</div>
      <button onClick={ props.increment }>+1</button>
      <button onClick={ props.decrement }>-1</button>
    </React.Fragment>
    )
  }
}

// props.◯◯として使えるようにするための記述
const mapStateToProps = state => ({ value: state.count.value })
  // props.valueをした時に取れる値はstate.count.value(🌸storeの中のcountのレデューサーのvalue🌸)ということ
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
  // decrementをキーにdecrementを引数にもつdispatch関数を定義
})
// const mapDispatchToProps = ({ increment, decrement }) とも書ける


export default connect(mapStateToProps, mapDispatchToProps)(App)
// mapStateToPropsはステート(store)の情報からこのコンポーネントの中で必要な情報を取り出してコンポーネント内のpropsとしてマッピングする機能を持つ関数、引数にはstateを取り、どういったオブジェクトをpropsとして対応させるのかを戻り値として定義する
// mapDispatchToPropsはあるアクションが発生した時に、タイプに応じた状態変更を実行させるdispatchをコンポーネント内のpropsとしてマッピングする機能を持つ関数

